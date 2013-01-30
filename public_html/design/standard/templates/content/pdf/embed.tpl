{* DO NOT EDIT THIS FILE! Use an override template instead. *}
{default attribute_parameters=array()
         border_size=0
         image_variation="false"
         align="center"}
{if $object.class_name|eq( 'Image' )}
         {if is_set($attribute_parameters.size)}
                {set image_variation=$object.data_map.image.content[$attribute_parameters.size]}
         {else}
                {set image_variation=$object.data_map.image.content[ezini( 'ImageSettings', 'DefaultEmbedAlias', 'content.ini' )]}
         {/if}
         {if is_set($attribute_parameters.align)}
                {set align=$attribute_parameters.align}
         {else}
                {set align="center"}
         {/if}
         {pdf(image,hash(src,$image_variation.full_path,
                         width,$image_variation.width,
                         height,$image_variation.height,
                         border,$border_size,
                         align,$align))}
{else}
   {pdf(link, hash( url, concat('content/view/full/',$object.main_node_id)|ezurl(no),
                    text, $object.name|wash(pdf) ) ) }
{/if}
{/default}