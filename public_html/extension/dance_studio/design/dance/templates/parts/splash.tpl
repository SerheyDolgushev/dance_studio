{cache-block keys=array( 'splash' ) expiry=3600}
{def
	$images = array()
	$node   = fetch( 'content', 'node', hash( 'node_id', $module_result.node_id ) )
	$image  = false()
}
{foreach $node.data_map.images.content.relation_list as $item}
	{set $image  = fetch( 'content', 'node', hash( 'node_id', $item.node_id ) )}
	{set $images = $images|append( $image.data_map.image.content['splash'].url|ezroot( 'no' ) )}
{/foreach}
<div id="galleryHolder">
	<div id="imageHolder">
		<img src="{$images[0]}" alt="">
	</div>
	<ul>
		{foreach $images as $image_src}
		<li><a href="{$image_src}"></a></li>
		{/foreach}
	</ul>
</div>
{undef $images $node $image}
{splash}