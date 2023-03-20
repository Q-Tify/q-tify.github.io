<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="cv-wrapper">
		<div class="menu">
			<a href="/">Home</a>
		</div>
		<div class="menu">
			<a href="/cv">CV</a>
		</div>
		<div class="menu">
			<a href="/joke">Joke</a>
		</div>
	</div>
</header>

<style>
.cv-wrapper{
	
	background-color: white;
	margin: 0 auto;
	padding: 0px 0px 0px 0px;
	width: 800px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	display: flex;
	justify-content: space-around;
	height: 60px;
	margin-top: 25px;
}

a{
	color:green;
	text-decoration: none;
	text-align: center;
	font-weight: bold;
	font-size:22px;
	position:relative;
	line-height: 1;
}

a:after{
	display: block;
	position: absolute;
	left: 0;
	width: 0;
	height: 4px;
	background-color: green; 
	content: "";
	transition: width 0.3s ease-out; 
}

a:hover:after,
a:focus:after{
	width: 100%;
}

.menu{
	margin-top:20px;
	display: block;
}	
</style>
