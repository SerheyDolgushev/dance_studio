<?php
/**
 * File containing the eZSearchLog class.
 *
 * @copyright Copyright (C) 1999-2012 eZ Systems AS. All rights reserved.
 * @license http://www.gnu.org/licenses/gpl-2.0.txt GNU General Public License v2
 * @version  2012.8
 * @package kernel
 */

/*!
  \class eZSearchLog ezsearchlog.php
  \brief eZSearchLog handles logging of search phrases

*/

class eZSearchLog
{
    /*!
     Logs a search query so that we can retrieve statistics afterwords.
    */
    static function addPhrase( $phrase, $returnCount )
    {
        $db = eZDB::instance();
        $db->begin();

        $trans = eZCharTransform::instance();
        $phrase = $trans->transformByGroup( trim( $phrase ), 'search' );

        // 250 is the numbers of characters accepted by the DB table, so shorten to fit
        if ( strlen( $phrase ) > 250 )
        {
            $phrase = substr( $phrase , 0 , 247 ) . "...";
        }
        $phrase = $db->escapeString( $phrase );

        // find or store the phrase
        $phraseRes = $db->arrayQuery( "SELECT id FROM ezsearch_search_phrase WHERE phrase='$phrase'" );

        if ( count( $phraseRes ) == 1 )
        {
            $phraseID = $phraseRes[0]['id'];
            $db->query( "UPDATE ezsearch_search_phrase
                         SET    phrase_count = phrase_count + 1,
                                result_count = result_count + $returnCount
                         WHERE  id = $phraseID" );
        }
        else
        {
            $db->query( "INSERT INTO
                              ezsearch_search_phrase ( phrase, phrase_count, result_count )
                         VALUES ( '$phrase', 1, $returnCount )" );

            /* when breaking BC: delete next line */
            $phraseID = $db->lastSerialID( 'ezsearch_search_phrase', 'id' );
        }

        /* when breaking BC: delete next lines */
        /* ezsearch_return_count is not used any more by eZ Publish
           but perhaps someone else added some functionality... */
        $time = time();
        // store the search result
        $db->query( "INSERT INTO
                           ezsearch_return_count ( phrase_id, count, time )
                     VALUES ( '$phraseID', '$returnCount', '$time' )" );
        /* end of BC breaking delete*/

        $db->commit();
    }

    /*!
     Returns the most frequent search phrases, which did not get hits.
    */
    static function mostFrequentPhraseArray( $parameters = array( ) )
    {
        $db = eZDB::instance();

        $query = 'SELECT phrase_count, result_count / phrase_count AS result_count, id, phrase
                  FROM   ezsearch_search_phrase
                  ORDER BY phrase_count DESC';

        return $db->arrayQuery( $query, $parameters );
    }

    /*!
     \static
     Removes all stored phrases and search match counts from the database.
    */
    static function removeStatistics()
    {
        $db = eZDB::instance();
        $query = "DELETE FROM ezsearch_search_phrase";
        $db->query( $query );
        /* when breaking BC: delete those two lines */
        $query = "DELETE FROM ezsearch_return_count";
        $db->query( $query );
    }
}

?>
