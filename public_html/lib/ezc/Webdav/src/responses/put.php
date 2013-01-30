<?php
/**
 * File containing the ezcWebdavPutResponse class.
 *
 * @package Webdav
 * @version //autogentag//
 * @copyright Copyright (C) 2005-2010 eZ Systems AS. All rights reserved.
 * @license http://ez.no/licenses/new_bsd New BSD License
 */
/**
 * Class generated by the backend to respond to PUT requests.
 *
 * If a {@link ezcWebdavBackend} receives an instance of {@link
 * ezcWebdavPutRequest} it might react with an instance of {@link
 * ezcWebdavPutResponse} or with producing an error.
 *
 * @version //autogentag//
 * @package Webdav
 */
class ezcWebdavPutResponse extends ezcWebdavResponse
{
    /**
     * Creates a new response object.
     * 
     * @return void
     */
    public function __construct()
    {
        parent::__construct( ezcWebdavResponse::STATUS_201 );
    }
}

?>
