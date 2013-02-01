<!DOCTYPE HTML>
<html lang="en">

	{include uri='design:head.tpl'}

	<body>
		<div id="spinner"></div>
		<div id="wrapper">

			{include uri='design:parts/splash.tpl'}

			<div class="navBox">
				<header>
					<h1><a href="#!/splash">{$site.title|wash}</a></h1>
				</header>

				{include uri='design:parts/menu.tpl'}
				{include uri='design:parts/footer.tpl'}
			</div>

			{include uri='design:parts/content.tpl'}

		</div>
	</body>
</html>