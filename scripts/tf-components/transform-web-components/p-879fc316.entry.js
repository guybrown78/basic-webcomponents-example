import{r as t,c as i,h as e}from"./p-a431e206.js";const o=class{constructor(e){t(this,e),this.loading=!1,this.formValid=!1,this.values={email:null,password:null},this.forgottenUrl=null,this.apiEndpoint=null,this.apiMethod="POST",this.apiHeaders=null,this.bodyPropEmail="email",this.bodyPropPassword="password",this.emailInputRef=null,this.passwordInputRef=null,this.tfLoginSuccess=i(this,"tfLoginSuccess",7)}async onLogin(t){t.preventDefault();const i=await this.emailInputRef.getValue(),e=await this.passwordInputRef.getItemRef();this.fetchAPI(i,e.value)}fetchAPI(t,i){if(this.loading=!0,!this.apiEndpoint)return this.error="No endpoint 'api-enpoint' declared",void(this.loading=!1);const e={[this.bodyPropEmail]:t,[this.bodyPropPassword]:i};let o={};if(this.apiHeaders){const t=JSON.parse(this.apiHeaders.replace(/'/g,'"'));this.isEmpty(t)||(o=Object.assign({},t))}fetch(this.apiEndpoint,{method:this.apiMethod,body:JSON.stringify(e),headers:o}).then(t=>{if(200!==t.status)throw new Error("Invalid!");return t.json()}).then(t=>{this.tfLoginSuccess.emit(t),this.loading=!1}).catch(t=>{console.log(t),this.loading=!1})}isEmpty(t){for(var i in t)if(t.hasOwnProperty(i))return!1;return!0}onUserInput(t){const i=t.target;this.values[i.id]=i.value.trim(),this.formValid=!(!this.values.email||!this.values.password)&&this.values.email.length>0&&this.values.password.length>0}render(){let t=null;return this.forgottenUrl&&(t=e("tf-a-tag",{slot:"flex",url:this.forgottenUrl,"tag-title":"Forgot your password?"},"Forgot your password?")),console.log(" ------------- "),console.log(t),e("tf-form-card",null,e("tf-form-title",null,e("tf-h1",null,"Login")),e("tf-form-wrapper",null,e("form",{onSubmit:this.onLogin.bind(this)},e("tf-input",{name:"email","input-type":"email","item-required":!0,label:"Email Address",ref:t=>this.emailInputRef=t,"input-value":this.values.email,onInput:this.onUserInput.bind(this),autoComplete:"email"}),e("tf-input",{name:"password","input-type":"password","item-required":!0,label:"Password",ref:t=>this.passwordInputRef=t,onInput:this.onUserInput.bind(this),autoComplete:"on"}),e("tf-node-flex-fxr",null,t,e("tf-button",{slot:"fxr",colour:"aqua","button-type":"submit"},"Login")))))}};o.style=".login-container{margin-bottom:1.5rem;min-height:100%;background-color:#ffffff;border-radius:0.5rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding-top:3rem;padding-bottom:3rem;padding-left:1.25rem;padding-right:1.25rem;margin-left:auto;margin-right:auto}.login-header{border-bottom-width:4px;border-color:#32F7DC;border-style:solid}.login-body{margin-top:2rem}.login-footer{margin-top:1.5rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.form-container{background-color:#ffffff;padding-bottom:2rem}.link-container{font-size:0.875rem;line-height:1.25rem}.header-2{margin-top:1rem;margin-bottom:1rem;font-size:1.875rem;line-height:2.25rem;font-weight:800;color:#363154}@media (min-width: 640px){.login-container{width:40%;padding-left:1.5rem;padding-right:1.5rem}.login-header{margin-left:auto;margin-right:auto;width:100%}.login-body{margin-left:auto;margin-right:auto;width:100%}.form-container{border-radius:0.5rem}}@media (min-width: 1024px){.login-container{padding-left:2rem;padding-right:2rem}}";export{o as tf_login_form}