"use strict";(self["webpackChunktest_web"]=self["webpackChunktest_web"]||[]).push([[474],{2474:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=a(3396),s=a(9242),n=a(7139);const r={class:"container"},d={class:"card"},o=(0,l._)("div",{class:"card-header"},"Add stutend",-1),m=(0,l._)("img",{class:"card-img-top",src:"holder.js/100x180/",alt:""},null,-1),c={class:"card-body"},u={class:"input-group"},i={key:0,class:"alert alert-secondary mt-2",role:"alert"};function g(e,t,a,g,p,h){return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",d,[o,m,(0,l._)("div",c,[(0,l._)("div",u,[(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>p.getfName=e),class:"form-control ml-2",placeholder:"First Name"},null,512),[[s.nr,p.getfName]]),(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>p.getlName=e),class:"form-control ml-2",placeholder:"Last Name"},null,512),[[s.nr,p.getlName]]),(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>p.getUsername=e),class:"form-control ml-2",placeholder:"Username"},null,512),[[s.nr,p.getUsername]]),(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>p.getEmail=e),class:"form-control ml-2",placeholder:"E-mail"},null,512),[[s.nr,p.getEmail]]),(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>p.getPassword=e),class:"form-control ml-2",placeholder:"Password"},null,512),[[s.nr,p.getPassword]])]),(0,l._)("button",{class:"btn btn-primary",onClick:t[5]||(t[5]=(...e)=>h.addStudent&&h.addStudent(...e))},"Add"),p.getResult?((0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("p",null,(0,n.zw)(p.getResult),1)])):(0,l.kq)("",!0)])])])}var p=a(6766),h={name:"my-home",data(){return{getResult:null,getUsername:"",getfName:"",getlName:"",getPassword:"",getEmail:""}},methods:{async addStudent(){const e={fname:this.getfName,lname:this.getlName,username:this.getUsername,email:this.getEmail,password:this.getPassword};console.log(e);try{await p.Z.create(e),this.getResult="Student Added! \n"}catch(t){this.getResult=t.getResult}}}},w=a(89);const y=(0,w.Z)(h,[["render",g]]);var f=y}}]);
//# sourceMappingURL=474.63688ef5.js.map