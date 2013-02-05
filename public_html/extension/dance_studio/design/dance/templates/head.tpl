{cache-block keys=array( 'head' ) expiry=3600}
<title>{$site.title|wash}</title>

{foreach $site.meta as $key => $item}
	{if is_set( $module_result.content_info.persistent_variable[$key] )}
	<meta name="{$key|wash}" content="{$module_result.content_info.persistent_variable[$key]|wash}" />
	{else}
	<meta name="{$key|wash}" content="{$item|wash}" />
	{/if}
{/foreach}

{*<link rel="shortcut icon" href="design/images/favicon.ico" type="image/x-icon" />*}

{ezcss_load(
	array(
		ezini( 'StylesheetSettings', 'FrontendCSSFileList', 'design.ini' )
	)
)}
{ezscript_load(
	array(
		ezini( 'JavaScriptSettings', 'FrontendJavaScriptList', 'design.ini' )
	)
)}

<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJAaq8L5qwoY9J9mzRaRZbaEhkJ7PjZLA&sensor=false"></script>

<!--[if lt IE 9]>
	<script type="text/javascript" src="{'javascript/html5.js'|ezdesign( 'no' )}"></script>
<![endif]-->
{/cache-block}