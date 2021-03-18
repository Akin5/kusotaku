<!DOCTYPE html>
<html lang="{{ str_replace("_",  "-", app()->getLocale()) }}">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="asset-url" content="{{ config('app.asset_url') }}">
	<meta name="theme-color" content="">

	<!-- <title>{{ config("app.name", "Kusotaku") }}</title> -->

	<link rel="apple-touch-icon" sizes="180x180" href="{{ asset('/apple-touch-icon.png') }}">
	<link rel="icon" type="image/png" sizes="32x32" href="{{ asset('/favicon-32x32.png') }}">
	<link rel="icon" type="image/png" sizes="16x16" href="{{ asset('/favicon-16x16.png') }}">
	<link rel="manifest" href="{{ asset('/site.webmanifest') }}">

	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&display=swap"
		rel="stylesheet">

	<link rel="stylesheet" href="{{ mix('dist/css/bootstrap.css') }}">
	<link rel="stylesheet" href="{{ mix('dist/css/app.css') }}">

	<script src="{{ mix('dist/js/app.js') }}" defer></script>
</head>

<body>
	<div id="app"></div>
</body>

</html>
