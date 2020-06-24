window.addEventListener('load', function(){


	//Map varibales
	var dykmanMap = document.getElementById("dykmanMap");
	var toshibaMap = document.getElementById("toshibaMap");
	var geMap = document.getElementById("geMap");
	var siemensMap = document.getElementById("siemensMap");
	var nidecMap = document.getElementById("nidecMap");
	var marathonMap = document.getElementById("marathonMap");
	var leesonMap = document.getElementById("leesonMap");
	var brookMap = document.getElementById("brookMap");
	var tecoMap = document.getElementById("tecoMap");
	var yaskawaMap = document.getElementById("yaskawaMap");
	var benshawMap = document.getElementById("benshawMap");
	var nordMap = document.getElementById("nordMap");
	var euroMap = document.getElementById("euroMap");
	var sumitomoMap = document.getElementById("sumitomoMap");
	var fujiMap = document.getElementById("fujiMap");
	var lsMap = document.getElementById("lsMap");
	var hammondMap = document.getElementById("hammondMap");
	var oregonPMap = document.getElementById("oregonPMap");
	var hubMap = document.getElementById("hubMap");
	var sprecherSchuhMap = document.getElementById("sprecherSchuhMap");
	var phaseMap = document.getElementById("phaseMap");
	var tciMap = document.getElementById("tciMap");
	
	
	//Vendor link Variables
	var dykmanBtn = document.getElementById("dykman");
	var toshibaBtn = document.getElementById("toshiba");
	var geBtn = document.getElementById("ge");
	var siemensBtn = document.getElementById("siemens");
	var nidecBtn = document.getElementById("nidec");
	var marathonBtn = document.getElementById("marathon");
	var leesonBtn = document.getElementById("leeson");
	var brookBtn = document.getElementById("brook");
	var tecoBtn = document.getElementById("teco");
	var yaskawaBtn = document.getElementById("yaskawa");
	var benshawBtn = document.getElementById("benshaw");
	var nordBtn = document.getElementById("nord");
	var euroBtn = document.getElementById("euro");
	var sumitomoBtn = document.getElementById("sumitomo");
	var fujiBtn = document.getElementById("fuji");
	var lsBtn = document.getElementById("ls");
	var hammondBtn = document.getElementById("hammond");
	var oregonPBtn = document.getElementById("oregonP");
	var hubBtn = document.getElementById("hub");
	var sprecherBtn = document.getElementById("sprecher");
	var phaseBtn = document.getElementById("phase");
	var tciBtn = document.getElementById("tci");
	
	
	//Vendor Location Variables
	var allLocs = document.querySelectorAll(".allLocs");
	var toshibaLocations = document.querySelectorAll(".toshibaLocations");
	var dykmanLocations = document.querySelectorAll(".dykmanLocations");
	var siemensLocations = document.querySelectorAll(".siemensLocations");
	var nidecLocations = document.querySelectorAll(".nidecLocations");
	var marathonLocations = document.querySelectorAll(".marathonLocations");
	var leesonLocations = document.querySelectorAll(".leesonLocations");
	var brookLocations = document.querySelectorAll(".brookLocations");
	var tecoLocations = document.querySelectorAll(".tecoLocations");
	var yaskawaLocations = document.querySelectorAll(".yaskawaLocations");
	var benshawLocations = document.querySelectorAll(".benshawLocations");
	var geLocations = document.querySelectorAll(".geLocations");
	var nordLocations = document.querySelectorAll(".nordLocations");
	var euroLocations = document.querySelectorAll(".euroLocations");
	var sumitomoLocations = document.querySelectorAll(".sumitomoLocations");
	var fujiLocations = document.querySelectorAll(".fujiLocations");
	var lsLocations = document.querySelectorAll(".lsLocations");
	var hammondLocations = document.querySelectorAll(".hammondLocations");
	var oregonPLocations = document.querySelectorAll(".oregonPLocations");
	var hubLocations = document.querySelectorAll(".hubLocations");
	var sprecherLocations = document.querySelectorAll(".sprecherLocations");
	var phaseLocations = document.querySelectorAll(".phaseLocations");
	var tciLocations = document.querySelectorAll(".tciLocations");
	
  
	//Remove maps that you don't want to display on load
	toshibaMap.style.display = "none";
	geMap.style.display = "none";
	siemensMap.style.display = "none";
	nidecMap.style.display = "none";
	marathonMap.style.display = "none";
	leesonMap.style.display = "none";
	brookMap.style.display = "none";
	tecoMap.style.display = "none";
	yaskawaMap.style.display = "none";
	benshawMap.style.display = "none";
	nordMap.style.display = "none";
	euroMap.style.display = "none";
	sumitomoMap.style.display = "none";
	fujiMap.style.display = "none";
	lsMap.style.display = "none";
	hammondMap.style.display = "none";
	oregonPMap.style.display = "none";
	hubMap.style.display = "none";
	sprecherSchuhMap.style.display = "none";
	phaseMap.style.display = "none";
	tciMap.style.display = "none";
	
	//Remove all locations display on load
	for(var i = 0; i < allLocs.length; ++i){
			allLocs[i].style.display = "none"

	}
	
  //Show the Dykman map locations below the map
	for(var i = 0; i < dykmanLocations.length; ++i){
			dykmanLocations[i].style.display = "block"

	}
	
	
	//event listener for Dykman locations
	dykmanBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "block";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
    //remove all location listings
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"
			}

      //show dykman locations
			for(var i = 0; i < dykmanLocations.length; ++i){
				dykmanLocations[i].style.display = "block"

			}

		})
    
  //event listener for Toshiba locations
	toshibaBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "block";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
      
		  //remove all location listings
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}
      
      //Show Toshiba listings
			for(var i = 0; i < toshibaLocations.length; ++i){
				toshibaLocations[i].style.display = "block"

			}

		})
    //event listener for GE locations
	geBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "block";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < geLocations.length; ++i){
				geLocations[i].style.display = "block"

			}

		})
    
    //event listener for Siemens locations
	siemensBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "block";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
					allLocs[i].style.display = "none"

			}

			for(var i = 0; i < siemensLocations.length; ++i){
				siemensLocations[i].style.display = "block"

			}

		})
    
    //event listener for Nidec locations
	nidecBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "block";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
					allLocs[i].style.display = "none"

			}

			for(var i = 0; i < nidecLocations.length; ++i){
				nidecLocations[i].style.display = "block"

			}

		})
    
    //event listener for Marathon locations
	marathonBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "block";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
			
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < marathonLocations.length; ++i){
				marathonLocations[i].style.display = "block"

			}

		})
    
    //event listener for Leeson locations
	leesonBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "block";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < leesonLocations.length; ++i){
				leesonLocations[i].style.display = "block"

			}

		})
    
    //event listener for Brook locations
	brookBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "block";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < brookLocations.length; ++i){
				brookLocations[i].style.display = "block"

			}

		})
    
    //event listener for TECO locations
	tecoBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "block";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < tecoLocations.length; ++i){
				tecoLocations[i].style.display = "block"

			}

		})
    
    //event listener for Yaskawa locations
	yaskawaBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "block";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < yaskawaLocations.length; ++i){
				yaskawaLocations[i].style.display = "block"

			}

		})
    
    //event listener for Benshaw locations
	benshawBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "block";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < benshawLocations.length; ++i){
				benshawLocations[i].style.display = "block"

			}
		})
    
    //event listener for Nord locations
	nordBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "block";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < nordLocations.length; ++i){
				nordLocations[i].style.display = "block"

			}

		})
    
    //event listener for Euro locations
	euroBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "block";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < euroLocations.length; ++i){
				euroLocations[i].style.display = "block"

			}

		})
    
    //event listener for Sumitomo locations
	sumitomoBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "block";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < sumitomoLocations.length; ++i){
				sumitomoLocations[i].style.display = "block"

			}

		})
    
    //event listener for Fuji locations
	fujiBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "block";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < fujiLocations.length; ++i){
				fujiLocations[i].style.display = "block"

			}

		})
    
    //event listener for LS locations
	lsBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "block";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < lsLocations.length; ++i){
				lsLocations[i].style.display = "block"

			}

		})
    
    //event listener for Hammond locations
	hammondBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "block";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < hammondLocations.length; ++i){
				hammondLocations[i].style.display = "block"

			}

		})
    
    //event listener for Oregon Power locations
	oregonPBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "block";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < oregonPLocations.length; ++i){
				oregonPLocations[i].style.display = "block"

			}

		})
    
    //event listener for Hub locations
	hubBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "block";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < hubLocations.length; ++i){
				hubLocations[i].style.display = "block"

			}

		})
    
    //event listener for Sprecher locations
	sprecherBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "block";
			phaseMap.style.display = "none";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < sprecherLocations.length; ++i){
				sprecherLocations[i].style.display = "block"

			}

		})
    
    //event listener for Phase locations
	phaseBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "block";
			tciMap.style.display = "none";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < phaseLocations.length; ++i){
				phaseLocations[i].style.display = "block"

			}

		})
    
    //event listener for TCI locations
	tciBtn.addEventListener("click", function(){
		
			toshibaMap.style.display = "none";
			dykmanMap.style.display = "none";
			geMap.style.display = "none";
			siemensMap.style.display = "none";
			nidecMap.style.display = "none";
			marathonMap.style.display = "none";
			leesonMap.style.display = "none";
			brookMap.style.display = "none";
			tecoMap.style.display = "none";
			yaskawaMap.style.display = "none";
			benshawMap.style.display = "none";
			nordMap.style.display = "none";
			euroMap.style.display = "none";
			sumitomoMap.style.display = "none";
			fujiMap.style.display = "none";
			lsMap.style.display = "none";
			hammondMap.style.display = "none";
			oregonPMap.style.display = "none";
			hubMap.style.display = "none";
			sprecherSchuhMap.style.display = "none";
			phaseMap.style.display = "none";
			tciMap.style.display = "block";
		
			for(var i = 0; i < allLocs.length; ++i){
				allLocs[i].style.display = "none"

			}

			for(var i = 0; i < tciLocations.length; ++i){
				tciLocations[i].style.display = "block"

			}

		})
	
})

			 
       
