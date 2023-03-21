const btn = document.querySelector('.notify')
const reqPermi = () =>{
	if(!("Notification" in window)){
		throw new Error("Browser doesnt support Notification")
	}else{
		Notification.requestPermission().then((permission)=>{
			if(permission === "granted"){
				alert("Permission Granted!")
			}
		})
	}
}


btn.addEventListener('click',reqPermi)