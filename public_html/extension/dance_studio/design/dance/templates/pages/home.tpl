{def $person = false()}
{foreach $page.data_map.persons.content.relation_list as $item}
	{set $person = fetch( 'content', 'node', hash( 'node_id', $item.node_id ) )}
	<div class="box_1">
		<img src="{$person.data_map.photo.content['person'].url|ezroot( 'no' )}" alt="{$person.data_map.name.content|wash}">
		<h3>{$person.data_map.name.content|wash}</h3>
		{attribute_view_gui attribute=$person.data_map.description}
	</div>
{/foreach}
{undef $person}