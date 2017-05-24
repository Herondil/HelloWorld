requirejs(["helper/util","helper/util2","helper/module","helper/module2"], 
	function(util,util2,module,module2) {
	
	console.log(module.nombre);
	
	module2.nombre += 10;
	
	console.log(module.nombre);
	
})