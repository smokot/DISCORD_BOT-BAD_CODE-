//////////////////////////////////////
//ПЕРВАЯ ФОРМА, МАНУАЛ ВЕРСИЯ(РУЧНАЯ)//
let form_manual = document.createElement("div");//Основное поле на котором будут элементы управления
let input_token = document.createElement("input"); //Поле ввода Токена для отправки сообщения
let input_room_id = document.createElement("input"); // Поле ввода АЙДИ комнаты
let input_text = document.createElement("input"); //Текст сообщения
let button_connect = document.createElement("button"); // Кнопка авторизации в аккаунт
let button_send = document.createElement("button"); // Кнопка отправки сообщения на сервер(в чат)
let label = document.createElement("span"); // Статус отправки сообщения
let token_two = document.createElement("input"); // Поле ввода Токена для авторизации

let token_inviter = document.createElement("input"); // Поле ввода Токена 
let link_to_coockie = document.createElement("input"); // Поле ввода Ссылка для инвайта
let button_to_coockie = document.createElement("button"); // Кнопка добавления инвайта в куки
let button_invite = document.createElement("button"); // Кнопка запуска инвайта
/////////////////////////////////////




//////////////////////////////////////
//ВТОРАЯ ФОРМА, АВТОМАТИЧЕСКАЯ ВЕРСИЯ (ОТПРАВКА СООБЩЕНИЙ)//
let form_auto = document.createElement("div");
let label_instruct = document.createElement("span");
let input_tokens = document.createElement("input");
let label_instruct_2 = document.createElement("span");
let input_ids = document.createElement("input");
let label_instruct_3 = document.createElement("span");
let input_phrases = document.createElement("input");
let quantity = document.createElement("input");
let timeout_msg = document.createElement("input");
let counter_msg = document.createElement("span");
let switcher = document.createElement("input"); 
let switcher_for_all = document.createElement("input"); 
let code_start = document.createElement("button");
/////////////////////////////////////////////

let id_massive = " ";
let status_fetch = null;
let massive_fetchers = new Array();

////ОТПРАВКА ЛАЙКОВ///////////////////////////////////////
let input_tokens_phrases = document.createElement("input");
let input_urls = document.createElement("input");
let timeout_like = document.createElement("input");
let code_start_likes = document.createElement("button");
let counter_likes = document.createElement("span");
let quantity_likes = document.createElement("input");
/////////////////////////////////////





/*

/---------------------РАБОЧИЙ ПРОТОТИП РЕПЛАЯ---------------///
let ref = 
{	
	message_reference:{
		guild_id: "917691417915162654", 
		channel_id: "921785439218704414", 
		message_id: "939068015625003018"
		}
};
let take = '"message_reference"'+":" +JSON.stringify(ref["message_reference"]);

let cont = '"каво ваще"';
const request = new Request("https://discord.com/api/v9/channels/921785439218704414/messages", {
                    method: 'POST',
                    body: '{"content":'+cont+',"tts": "false",'+take+'}',
                    headers: {
                        "authorization": 'ODk1MTUxNzIxNzU0NTI1NzQ2.YV0ZJw.HpCMTY6LPqTyiTtQvbKFz7kZsR8',
                        "Content-Type": "application/json"
                    }

                });
                


                let response = await fetch(request);
				
				
/---------------------РАБОЧИЙ ПРОТОТИП РЕПЛАЯ---------------///
*/











let flag_manual = true;
let flag_auto = true;

class Spamer
{
	
		static rand_int(max){
			return Math.floor(Math.random() * max);
			
		}
	
		static async reply_message(token, guildID, channelID, messageID, message_text)
		{
			
			message_text = message_text.split("\n").join("");
			
			
			
			
			let url = "https://discord.com/api/v9/channels/"+channelID+"/messages";
			guildID = guildID.split("\n").join("");
			
			let ref = 
			{	
				message_reference:{
					guild_id: new String(guildID), 
					channel_id: new String(channelID), 
					message_id: new String(messageID)
					}
			};
			let take = '"message_reference"'+":" +JSON.stringify(ref["message_reference"]);

			let cont = '"'+new String( message_text)+'"';
			const request = new Request(url, {
								method: 'POST',
								body: '{"content":'+cont+',"tts": "false",'+take+'}',
								headers: {
									"authorization": token,
									"Content-Type": "application/json"
								}

							});

            let response = await fetch(request);
			let texter = await response.json();
			status_fetch = await texter["id"];
			console.log(status_fetch);
			return true;
		}
	
		static authorization_new(token)
        {
           
            setInterval(() => {
                document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
            }, 50);

            setTimeout(() => {
                location.reload();
            }, 400);

        }
	
	
		static add_to_coockie()
		{
			cookieStore.set('link',link_to_coockie.value);
			
		}
		
		static async start_invite()
		{
			Spamer.authorization_new(token_inviter.value);
			
			let take_url = await cookieStore.get('link');
			
			document.location.href = take_url.value;
		
			
		}
		
	
		static async send_like_auto(url, token)
		{
			
			
			url = url.split("\n").join("");
			token = token.split("\n").join("");
			
			url = url.split("/");
			let url_sub_one = url[5];
			let url_sub_two = url[6];
			let memes_array = ["%F0%9F%9A%80","%F0%9F%92%AF","%E2%9D%A4%EF%B8%8F","%F0%9F%91%8D"];
			let mem = memes_array[Math.floor(Math.random() * memes_array.length)];
			url = "https://discord.com/api/v9/channels/" + new String(url_sub_one)+"/messages/"+new String(url_sub_two)+"/reactions/"+ new String(mem) + "/%40me";
			
			
			
			const request = new Request(url, {
				method: 'PUT',
				headers: {
					"authorization": token,
					"Content-Type": "application/json"
				}

			});
			
			let response = await fetch(request);
			
			
			
			
		}
	
		
        static async send_message_manual()
        {
            let url = "https://discord.com/api/v9/channels/"+new String(input_room_id.value)+"/messages";

            let text = '"' + new String(input_text.value)+'"';
            let token = new String(input_token.value);

            if(input_room_id.value == '' || input_token.value == '' ||input_text.vale == '')
            {
                alert("FILL ALL FIELDS!");
            }
            else{

                const request = new Request(url, {
                    method: 'POST',
                    body: '{"content":'+text+',"tts": "false"}',
                    headers: {
                        "authorization": token,
                        "Content-Type": "application/json"
                    }

                });
                
                let response = await fetch(request);
           
				let texter = await response.json();
				let comp_content = new String(input_text.value);
				
				if(texter["content"] == comp_content){
					label.style="font-size:30px; color: yellow; border: 1px solid; margin-left: 130px; top:50px; width:400px;";
					label.innerText = "successfull sended!";
					
				}
				else{
					label.style="font-size:30px; color: red; border: 1px solid; margin-left: 130px; top:50px; width:400px;";
					label.innerText = "Something went wrong";
				}
				

                
            }
        }
		
		
		
		static async send_message_auto(token,room_id, text)
        {
            let url = "https://discord.com/api/v9/channels/"+new String(room_id)+"/messages";

            text = text.split("\n").join("");
			
			text = '"' + new String(text)+'"';
           
           
			const request = new Request(url, {
				method: 'POST',
				body: '{"content":'+text+',"tts": "false"}',
				headers: {
					"authorization": token,
					"Content-Type": "application/json"
				}

			});
			
			let response = await fetch(request);
	   
			let texter = await response.json();
			status_fetch = texter["id"];
			console.log(status_fetch);
			
			if(texter["content"] == text){
				label.style="font-size:30px; color: yellow; border: 1px solid; margin-left: 130px; top:50px; width:400px;";
				label.innerText = "successfull sended!";
				return true;
				
			}
			else{
				label.style="font-size:30px; color: red; border: 1px solid; margin-left: 130px; top:50px; width:400px;";
				label.innerText = "Something went wrong";
				return false;
			}
            
        }
		
		

      static authorization()
        {
            let token = token_two.value;
            setInterval(() => {
                document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
            }, 50);

            setTimeout(() => {
                location.reload();
            }, 400);

        }
		
		
		
		
		static start_auto_script_spam()
		{
			/////ПОЛУЧАЕМ ВСЕ ВВЕДЁННЫЕ ДАННЫЕ////
			let token_massive = " ";
			
			let phrases_massive = " ";
			let quantity_num = quantity.value;
			let timeout_num = timeout_msg.value;
			let count = 0;
			
			//quantity
			//timeout
			
			
			
			
			/////ЧИТАЕМ ВСЕ ТОКЕНЫ ИЗ ФАЙЛА/////
			let reader_token = new FileReader();
			let file_token = input_tokens.files[0];
			reader_token.readAsText(file_token);
			reader_token.onload = function() {
				token_massive = reader_token.result.split('\r');
			};
			reader_token.onerror = function() {
				alert(reader_token.error);
			};
			///////////////////////////////////
			
			
			
			//////ЧИТАЕМ ВСЕ АЙДИ ИЗ ФАЙЛА//////
			let reader_id = new FileReader();
			let file_id = input_ids.files[0];
			reader_id.readAsText(file_id);
			reader_id.onload = function() {
				id_massive = reader_id.result.split('\r');
				
			};
			reader_id.onerror = function() {
				alert(reader_id.error);
			};
			/////////////////////////////////////
			
			
			////ЧИТАЕМ ВСЕ ФРАЗЫ ИЗ ФАЙЛА/////
			let reader_phrase = new FileReader();
			let file_phrase = input_phrases.files[0];
			reader_phrase.readAsText(file_phrase);
			reader_phrase.onload = function() {
				phrases_massive = reader_phrase.result.split('\r');
			};
			reader_phrase.onerror = function() {
				alert(reader_phrase.error);
			};
			/////////////////////////////////////
			
			
			
			/////////////////////////////////////
			////Подгрузили данные , дальше////
		
			
			
			
			let timer_id = setInterval(() => {
				let ider = id_massive[count].split(',');
				if(count == 0)
				{
					Spamer.send_message_auto(token_massive[count],ider[1],phrases_massive[count]);
					count = count+1;
				}
				else{
					if(count == quantity_num)
					{
						clearInterval(timer_id);
					}
					else{
						
						if(switcher.checked == true){ //----- Здесь отправляю реплай следующего токена на прошлое сообщение ----//
							let flag = Spamer.reply_message(token_massive[count], ider[0], ider[1],status_fetch, phrases_massive[count]);
							if(flag){
								count = count+1;
							}
							counter_msg.innerText = new String(count);
						}
						else{
							if(switcher_for_all.checked == true){ //--------А здесь отправляю реплай на старое сообщение, рандомным токеном--------//
								massive_fetchers.push(status_fetch);
								let rand_tok = token_massive[Spamer.rand_int(token_massive.length)];
								
								let rand_fetch = massive_fetchers[Spamer.rand_int(massive_fetchers.length)];
								
								
								let flag = Spamer.reply_message(rand_tok, ider[0], ider[1],rand_fetch, phrases_massive[count]);
								
								if(massive_fetchers.length >= 15){
									massive_fetchers.shift();
								}
							
								if(flag){
									count = count+1;
								}
								counter_msg.innerText = new String(count);
							}
							else{
									let flag = Spamer.send_message_auto(token_massive[count], ider[1], phrases_massive[count]);
									if(flag){
										count = count+1;
									}
									counter_msg.innerText = new String(count);
							}
						}
						
						
						
					}
				}
				
				
			   
			}, timeout_num);
			
			
		}
		
		static start_auto_script_like()
		{
			let count = 0;
			let timeout_num = timeout_like.value;
			let quantity_num = quantity_likes.value;
			let token_massive = " ";
			let url_massive = " ";
			
			
			/////ЧИТАЕМ ВСЕ ТОКЕНЫ ИЗ ФАЙЛА/////
			let reader_token = new FileReader();
			let file_token = input_tokens_phrases.files[0];
			reader_token.readAsText(file_token);
			reader_token.onload = function() {
				token_massive = reader_token.result.split('\r');
			};
			reader_token.onerror = function() {
				alert(reader_token.error);
			};
			///////////////////////////////////
			
			
			
			//////ЧИТАЕМ ВСЕ URL ИЗ ФАЙЛА//////
			let reader_id = new FileReader();
			let file_id = input_urls.files[0];
			reader_id.readAsText(file_id);
			reader_id.onload = function() {
				url_massive = reader_id.result.split('\r');
				
			};
			reader_id.onerror = function() {
				alert(reader_id.error);
			};
			/////////////////////////////////////
			
			
			let timer_id = setInterval(() => {
				if(count == quantity_num)
				{
					clearInterval(timer_id);
				}
				else{
					let flag = Spamer.send_like_auto(url_massive[count], token_massive[count]);
					if(flag){
						count = count+1;
					}
					counter_likes.innerText = new String(count);
				}
				
			   
			}, timeout_num);
		}

        constructor()
        {
            setTimeout(() => {

                form_manual.className = "popupper_manual";
                form_manual.style = "width:500px; height: 650px; overflow: auto; background-color: rgba(0,0,0,0.8); position:fixed; top:100px; left:100px; padding-top: 100px;  border: 1px solid; border-radius: 50px; border-color:yellow;"

                document.body.append(form_manual);


                input_token.style = "font-size:60px; margin-left: 50px; width:400px;";
                input_token.placeholder = "current token";
                input_token.className = "token_inp";
                input_token.text = "whaw";
                form_manual.append(input_token );


                input_room_id.style = "font-size:60px; margin-left: 50px; margin-top: 2px; width:400px;";
                input_room_id.placeholder = "room id";
                input_room_id.className = "room_id_inp";
                form_manual.append(input_room_id );

                input_text.style = "font-size:60px; margin-left: 50px; margin-top: 2px; width:400px;";
                input_text.placeholder = "text";
                input_text.className = "room_id_text";
                form_manual.append(input_text );

                button_send.innerText = "send message";
                button_send.className = "send_btn";
                button_send.onclick = Spamer.send_message_manual;
                button_send.style="font-size:50px; color: yellow; border: 4px solid; margin-left: 50px; width:400px;";
                form_manual.append(button_send);



                label.innerText = "waiting 5nd";
                label.style="font-size:20px; color: gray; border: 4px solid; margin-left: 130px; top:20px; width:400px;";
                label.className = "status_send";
                form_manual.append(label);


                token_two.style = "font-size:60px; margin-left: 50px; margin-top: 20px; width:400px;";
                token_two.placeholder = "token_auth";
                token_two.className = "token_two";
                form_manual.append(token_two );


                button_connect.innerText = "authorization";
                button_connect.className = "auth";
                button_connect.onclick = Spamer.authorization;
                button_connect.style="font-size:50px; color: red; border: 4px solid; margin-left: 50px; width:400px;";
                form_manual.append(button_connect);
				
				
				link_to_coockie.style = "font-size:40px; margin-left: 50px; margin-top: 200px; width:400px;";
                link_to_coockie.placeholder = "link_to_coockie";
                link_to_coockie.className = "link_to_coockie";
                form_manual.append(link_to_coockie);
				
				
				button_to_coockie.innerText = "Add to Coockie";
                button_to_coockie.className = "button_to_coockie";
                button_to_coockie.onclick = Spamer.add_to_coockie;
                button_to_coockie.style="font-size:50px; color: red; border: 4px solid; margin-left: 50px; width:400px;";
                form_manual.append(button_to_coockie);
				
				
				
				token_inviter.style = "font-size:40px; margin-left: 50px; margin-top: 20px; width:400px;";
                token_inviter.placeholder = "token_inviter";
                token_inviter.className = "token_inviter";
                form_manual.append(token_inviter);
				
				
				button_invite.innerText = "Start invite";
                button_invite.className = "button_invite";
                button_invite.onclick = Spamer.start_invite;
                button_invite.style="font-size:50px; color: red; border: 4px solid; margin-left: 50px; width:400px;";
                form_manual.append(button_invite);
				
				
				
				
				
                form_manual.hidden = true;
            }, 400);
			
			
			
			setTimeout(() => {
				form_auto.className = "popupper_auto";
                form_auto.style = "width:600px; height: 650px; overflow: auto; background-color: rgba(0,0,0,0.8); position:fixed; top:20px; left:600px; padding-top: 100px;  border: 1px solid; border-radius: 50px; border-color:yellow;"

				label_instruct.style = "font-size:30px; color:white; margin-left: 50px; margin-top: 20px; width:400px; height:400px; multiline";
				label_instruct.innerText ="Choose or drag file with token list";

				
				input_tokens.type = "file";
				input_tokens.className = "token_list";
				input_tokens.style = "font-size:20px; color:white; margin-left: 50px; margin-top: 20px; width:500px; height:50px; multiline";
				
				
				input_ids.type = "file";
				input_ids.className = "id_list";
				input_ids.style = "font-size:20px; color:white; margin-left: 50px; margin-top: 20px; width:500px; height:50px; multiline";
				
				
				label_instruct_2.style = "font-size:30px; color:white; margin-left: 50px; margin-top: 20px; width:400px; height:400px; multiline";
				label_instruct_2.innerText ="Choose or drag file with chat ids list";
				
				input_phrases.type = "file";
				input_phrases.className = "phrases_list";
				input_phrases.style = "font-size:20px; color:white; margin-left: 50px; margin-top: 20px; width:400px; height:50px; multiline";
				
				
				label_instruct_3.style = "font-size:30px; color:white; margin-left: 50px; margin-top: 20px; width:400px; height:400px; multiline";
				label_instruct_3.innerText ="Choose or drag file with phrases list";
				
				
				code_start.innerText = "START MSG";
                code_start.className = "start_code";
                code_start.onclick = Spamer.start_auto_script_spam;
                code_start.style="font-size:50px; color: red; border: 4px solid; margin-top: 20px; margin-left: 50px; width:400px;";
                
				
				quantity.type = "number";
				quantity.placeholder="quantity msg";
				quantity.className = "quantity";
				quantity.style = "color:black; margin-left: 50px; margin-top: 20px; width:500px; height:50px;";
				
				timeout_msg.type = "number";
				timeout_msg.placeholder="timeout";
				timeout_msg.className = "timeout_msg";
				timeout_msg.style = "color:black; margin-left: 50px; margin-top: 20px; width:500px; height:50px;";
				
				counter_msg.innerText = "0";
				counter_msg.className = "counter_msg";
				counter_msg.style = "font-size:30px; color:white; margin-left: 50px; margin-top: 20px; margin-bottom: 50px; width:400px; height:400px;";
				
				
				input_tokens_phrases.type = "file";
				input_tokens_phrases.className = "input_tokens_phrases";
				input_tokens_phrases.title = "INPUT TOKENS";
				input_tokens_phrases.style = "font-size:20px; color:white; margin-left: 50px; margin-top: 150px; width:400px; height:50px; multiline";
				
				
				input_urls.type = "file";
				input_urls.className = "input_urls";
				input_urls.title = "INPUT URLS";
				input_urls.style = "font-size:20px; color:white; margin-left: 50px; margin-top: 40px; width:400px; height:50px; multiline";
				
				counter_likes.innerText = "0";
				counter_likes.className = "counter_likes";
				counter_likes.style = "font-size:30px; color:white; margin-left: 50px; margin-top: 20px; width:400px; height:400px;";
				
				code_start_likes.innerText = "START LIKES";
                code_start_likes.className = "code_start_likes";
                code_start_likes.onclick = Spamer.start_auto_script_like;
                code_start_likes.style="font-size:50px; color: red; border: 4px solid; margin-top: 20px; margin-left: 50px; width:400px;";
                
				
				timeout_like.type = "number";
				timeout_like.placeholder="timeout";
				timeout_like.className = "timeout_like";
				timeout_like.style = "color:black; margin-left: 50px; margin-top: 20px; width:500px; height:50px;";
				
				
				
				quantity_likes.type = "number";
				quantity_likes.placeholder="quantity likes";
				quantity_likes.className = "quantity_likes";
				quantity_likes.style = "color:black; margin-left: 50px; margin-top: 20px; width:500px; height:50px;";
				
				
				switcher.type = "checkbox";
				switcher.className = "switcher";
				switcher.title = "checkbox, messages(nonactive) or reply(active)";
				switcher.style = "font-size:20px; color:white; margin-left: 50px; margin-top: 40px; width:400px; height:50px; multiline";
				
				
				switcher_for_all.type = "checkbox";
				switcher_for_all.className = "switcher_for_all";
				switcher_for_all.title = "checkbox, reply for ALL";
				switcher_for_all.style = "font-size:20px; color:white; margin-left: 50px; margin-top: 40px; width:400px; height:50px; multiline";
				
				
				
				//------------------------------------------------------//
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				//-------------------------------------------------------//
				
				
				form_auto.append(label_instruct);
				form_auto.append(input_tokens);
				
				form_auto.append(label_instruct_2);
				form_auto.append(input_ids);
				
				
				form_auto.append(label_instruct_3);
				form_auto.append(input_phrases);
				
				
				
				form_auto.append(quantity);
				form_auto.append(timeout_msg);
				form_auto.append(switcher);
				form_auto.append(switcher_for_all);
				form_auto.append(code_start);
				form_auto.append(counter_msg);
				
				
				
				
				form_auto.append(input_tokens_phrases);
				
				form_auto.append(input_urls);
				form_auto.append(timeout_like);
				form_auto.append(quantity_likes);
				form_auto.append(counter_likes);
				form_auto.append(code_start_likes);
				
					
					
                document.body.append(form_auto);
				form_auto.hidden = true;
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
			}, 400);
					
        }


		form()
        {

            label.style="font-size:30px; color: gray; border: 1px solid; margin:50px 20px 20px 130px; width:400px;";
            label.innerText = "waiting for send";
            if (event.key == 'F8') {
                if(flag_manual){
                    window.scroll(1000,1000);
                    form_manual.hidden = false;
                    flag_manual = !flag_manual;
                }
                else{
                    window.scroll(0,0);
                    form_manual.hidden = true;
                    flag_manual = !flag_manual;
                }
                
            }


            if(event.key == 'F9')
            {
                if(flag_auto){
                    window.scroll(1000,1000);
                    form_auto.hidden = false;
                    flag_auto = !flag_auto;
                }
                else{
                    window.scroll(0,0);
                    form_auto.hidden = true;
                    flag_auto = !flag_auto;
                }

            }


        }



}


//Здесь запускаем скрипт



let Spammer = new Spamer();



document.addEventListener('keydown', Spammer.form);
  