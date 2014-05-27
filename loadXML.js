//读取xml
	function loadXML(file){
		try //Internet Explorer  
		{  
			xmlDoc=new ActiveXObject("Microsoft.XMLDOM");  
			xmlDoc.async=false;  
			xmlDoc.load(file);  
		}catch(e){  
			try //Firefox, Mozilla, Opera, etc.  
			{  
				xmlDoc=document.implementation.createDocument("","",null);  
				xmlDoc.async=false;  
				xmlDoc.load(file);  
			}catch(e){  
				try //Google Chrome  
				{  
					var xmlhttp = new window.XMLHttpRequest();  
					xmlhttp.open("GET",file,false);  
					xmlhttp.send(null);  
					xmlDoc = xmlhttp.responseXML.documentElement;  
				}catch(e){  
					alert("您的浏览器不能正常加载文件。请切换到兼容模式，或者更换浏览器"); 
				}
			}  
		}  
		return xmlDoc;
	}
	var xmlFileName = "LG50.xml";
	var xmlDoc = loadXML(xmlFileName);
	var xmlDom = xmlDoc.documentElement;
	// console.log(xmlDom);