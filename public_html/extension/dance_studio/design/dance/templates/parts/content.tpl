{cache-block keys=array( 'content' ) expiry=3600}
{def
	$node  = fetch( 'content', 'node', hash( 'node_id', $module_result.node_id ) )
	$pages = fetch(
		'content', 'list',
		hash(
			'parent_node_id', 1,
			'class_filter_type',  'include',
			'class_filter_array', array( 'page' ),
			'depth', false()
		)
	)
	$page_type = false()
}
<section>
	<ul>
		<li id="splash">
			<div id="text1">Goroyan</div>
			<div id="text2">Dance Studio</div>
		</li>
		{foreach $pages as $page}
		{set $page_type = $page.data_map.type_id.content|wash}
		<li id="{$page_type}">
			<div class="viewport">
				<div class="overview">
				{if eq( $page_type, 'home' )}
				{include uri='design:pages/home.tpl' page=$page}
				{elseif eq( $page_type, 'instructors' )}
				{include uri='design:pages/instructors.tpl' page=$page}
				{else}
				{include uri='design:pages/default.tpl' page=$page}
				{/if}
				</div>
			</div>
			<div class="scrollWrapper"><div class="scrollbar"><div class="track"><div class="thumb"></div></div></div></div>
		</li>
		{/foreach}
	</ul>
</section>
{undef $node $pages}
{/cache-block}
