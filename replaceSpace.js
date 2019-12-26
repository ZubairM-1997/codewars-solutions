
function replaceSpace(str){
	if(typeof str !== "string"){
		return null;
	} else {
	  const charArray = str.split("")

	  for (let i = 0; i < charArray.length; i++){
		if(charArray[i] === " "){
		  charArray[i] = "%20"
		}
	  }

	  let alteredArray = charArray

	  return alteredArray.join("")

	}
  }

  replaceSpace("The Empire State Building")