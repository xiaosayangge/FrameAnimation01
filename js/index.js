$(function(){
	
	var positions=['0 -854','-174 -852','-349 -852','-524 -852','-698 -852','-873 -848'];
	
	
	var rabbit =document.getElementById("rabbit");
	
	function animation(ele,positions,imgUrl){
		ele.style.backgroundImage =imgUrl;
		ele.style.backgroundRepeat="no-repeat";
		var index=0;
		function run(){
			setInterval(function(){
				var position=positions[index].split(" ");
				ele.style.backgroundPosition=position[0]+"px "+position[1]+"px";
				index++;
				if(index>=positions.length){
					index=0;
				}
			},80);
		}
		run();
	}
	animation(rabbit,positions,"url(img/rabbit-big.png)");
	
	
})