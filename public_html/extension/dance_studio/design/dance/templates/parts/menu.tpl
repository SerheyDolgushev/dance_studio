{cache-block keys=array( 'menu' ) expiry=3600}
{def $pages = fetch(
	'content', 'list',
	hash(
		'parent_node_id', 1,
		'class_filter_type',  'include',
		'class_filter_array', array( 'page' ),
		'depth', false()
	)
)}
<nav>
	<ul>
		{foreach $pages as $page}
		<li><a href="#!/{$page.data_map.type_id.content|wash}">{$page.name|wash}</a></li>
		{/foreach}
	</ul>
</nav>
{undef $pages}
{/cache-block}