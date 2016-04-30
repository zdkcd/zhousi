function pics_show(emId,delay){
	var obj=jq("#"+emId),
		con=obj.find("div.image"),
		len=con.length-1,
		lis=obj.find("div.change>i"),
		curr=0,old=-1,
		timer=null;
		var arr_l = obj.find(".arr_l a");
  	var arr_r = obj.find(".arr_r a");
	var begin=false;
	function roll(curr_){
		//con.css("display","none");
		if(curr_==old){return;}
		begin=true;
		curr=curr_;
		lis.removeClass("cur");
		jq(lis[curr]).addClass("cur");
		if(old>-1){
			jq(con[old]).css("z-index","0").find(">span").css("display","none");
		}
		jq(con[curr_]).find(">span").css("display","block");
		jq(con[curr_]).find("img").attr("src",function(){return this.className});
		jq(con[curr_]).css({"display":"block","z-index":"9999"}).find("img").css("display","block");
			if(old>-1){				
				jq(con[old]).find("img").css("display","none");
				jq(con[old]).css("display","none");
			}
			old=curr;
			begin=false;
	}
		arr_l.click(function(){
	    fnPause();
		curr=fnPrev(curr);
		roll(curr);
		fnPlay();
		return false;
	});
	arr_r.click(function(){
	    fnPause();
		curr=fnNext(curr);
		roll(curr);
		fnPlay();
		return false;
	});
	function fnPrev(curr_){
		var index=curr_;
		index-=1;
		if(index<0) index=len;
		return index;
	}
	function fnNext(curr_){
		var index=curr_;
		index+=1;
		if(index>len) index=0;
		return index;
	}
	function fnGo(){
		roll(fnNext(curr));
	}
	function fnPlay(){
		timer=setInterval(fnGo,delay);
	}
	function fnPause(){
		
		clearInterval(timer);
	}
	
	
	function t1(){
		jq("#pics_show .image").mouseover(function(){
																
															fnPause();			 
																					 
																					 })
		
		
			jq("#pics_show .image").mouseout(function(){
													 
															 fnPlay();						 
																					 
																					 })
			
			
					jq("#pics_show .change").mouseover(function(){
													 	fnPause();			 
															 						 })
			
			
					jq("#pics_show .change").mouseout(function(){
													 	
															 fnPlay();			 
																					 })
		
		}
	
	roll(curr);
	fnPlay();
	t1();
	lis.each(function(i,li){
		jq(li).hover(function(){
		if(begin){return;}
			fnPause();
			curr=i;
			roll(curr);
			//fnPlay();	
		},function(){})
	});
	
}
