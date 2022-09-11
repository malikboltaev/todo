(function(){"use strict";var t={3405:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var o=n(5010),i=(n(4916),n(4765),n(3396)),r=n.p+"img/edit.092f5b23.svg",a={class:"wrapper"},s=(0,i._)("img",{src:r,alt:""},null,-1),l=[s];function c(t,e,n,r,s,c){var d=(0,i.up)("Navbar"),u=(0,i.up)("Notes"),f=(0,i.up)("Modal");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(d,{onSetSearchVal:e[0]||(e[0]=function(t){return s.search=t})}),(0,i.Wm)(u,{notes:c.filterNotes,onDelNote:c.delNote,onChangeNote:c.changeNote},null,8,["notes","onDelNote","onChangeNote"]),(0,i.wy)((0,i.Wm)(f,{onCloseModal:e[1]||(e[1]=function(t){return s.isModalOpen=!1,s.edit=!1}),onAddNote:c.addNote,edit:s.edit,editedNote:s.editedNote,onEditedNewNote:c.editedNewNote},null,8,["onAddNote","edit","editedNote","onEditedNewNote"]),[[o.F8,s.isModalOpen]]),s.isModalOpen?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:0,class:"add__note",onClick:e[2]||(e[2]=function(t){return s.isModalOpen=!0})},l))])}n(7327),n(1539),n(6699),n(2023),n(4553),n(561),n(9826),n(4747),n(8862);var d=n.p+"img/search.2c9e71ed.svg",u=n.p+"img/back.014b4ff1.svg",f=n.p+"img/close.1d4d165f.svg",_={class:"header"},h={class:"header__nav"},v=(0,i._)("button",{class:"header__nav-lang"},"Ru",-1),p=(0,i._)("h1",{class:"header__nav-title"},"Заметки",-1),m=(0,i._)("img",{src:d,alt:""},null,-1),w=[m],g={class:"header__search"},N=(0,i._)("img",{src:u,alt:""},null,-1),b=[N],k=(0,i._)("img",{src:f,alt:""},null,-1),y=[k];function C(t,e,n,r,a,s){return(0,i.wg)(),(0,i.iD)("header",_,[(0,i.Wm)(o.uT,{name:"nav"},{default:(0,i.w5)((function(){return[(0,i.wy)((0,i._)("nav",h,[v,p,(0,i._)("button",{class:"header__nav-search",onClick:e[0]||(e[0]=function(t){return a.header=!1})},w)],512),[[o.F8,1==a.header]])]})),_:1}),(0,i.Wm)(o.uT,{name:"search"},{default:(0,i.w5)((function(){return[(0,i.wy)((0,i._)("nav",g,[(0,i._)("button",{class:"header__search-back",onClick:e[1]||(e[1]=function(t){return a.header=!0,a.search=""})},b),(0,i.wy)((0,i._)("input",{type:"text",placeholder:"Поиск...","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.search=t})},null,512),[[o.nr,a.search]]),(0,i._)("button",{class:"header__search-clear",onClick:e[3]||(e[3]=function(t){return a.search=""})},y)],512),[[o.F8,0==a.header]])]})),_:1})])}var x={data:function(){return{header:!0,search:""}},watch:{search:function(t){this.$emit("setSearchVal",t)}}},O=n(89);const M=(0,O.Z)(x,[["render",C]]);var D=M,j=n(7139),S=n.p+"img/list.4ed3d4be.svg",$=n.p+"img/grid.dbae4039.svg",z={class:"notes"},F={class:"container"},T={class:"notes__top"},I={class:"notes__top-title"},V={src:S,alt:""},W={src:$,alt:""};function Z(t,e,n,r,a,s){var l=(0,i.up)("NotesItem");return(0,i.wg)(),(0,i.iD)("div",z,[(0,i._)("div",F,[(0,i._)("div",T,[(0,i._)("h2",I,(0,j.zw)(n.notes.length>0?"Все заметки":"Нет заметок"),1),(0,i._)("button",{class:"notes__top-btn",onClick:e[0]||(e[0]=function(t){return a.view=!a.view})},[(0,i.wy)((0,i._)("img",V,null,512),[[o.F8,a.view]]),(0,i.wy)((0,i._)("img",W,null,512),[[o.F8,!a.view]]),(0,i._)("span",null,(0,j.zw)(a.view?"Список":"Сетка"),1)])]),(0,i._)("div",{class:(0,j.C_)(["notes__list",{active:!a.view}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.notes,(function(e){return(0,i.wg)(),(0,i.j4)(l,{key:e.id,note:e,view:a.view,onDelNote:function(n){return t.$emit("delNote",e.id)},onChangeNote:function(n){return t.$emit("changeNote",e.id)}},null,8,["note","view","onDelNote","onChangeNote"])})),128))],2)])])}var E=n.p+"img/del.f04c87ff.svg",L={class:"notes__item"},A={class:"notes__item-title"},U={class:"notes__item-date"},B={class:"notes__item-text"},J={class:"notes__item-btns"},P=(0,i._)("img",{src:r,alt:""},null,-1),q=(0,i._)("span",null,"РЕДАКТИРОВАТЬ",-1),H=[P,q],K=(0,i._)("img",{src:E,alt:""},null,-1),R=(0,i._)("span",null,"Удалить",-1),Y=[K,R];function G(t,e,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("div",{class:(0,j.C_)(["notes__item-top",{between:!n.view}])},[(0,i._)("h3",A,(0,j.zw)(n.note.title),1),(0,i._)("p",U,(0,j.zw)(n.note.date),1)],2),(0,i._)("p",B,(0,j.zw)(n.note.text),1),(0,i._)("div",J,[(0,i._)("button",{class:"notes__item-btn edit",onClick:e[0]||(e[0]=function(e){return t.$emit("changeNote",n.note.id)})},H),(0,i._)("button",{class:"notes__item-btn del",onClick:e[1]||(e[1]=function(e){return t.$emit("delNote",n.note.id)})},Y)])])}var Q={props:{note:Object,view:Boolean}};const X=(0,O.Z)(Q,[["render",G]]);var tt=X,et={components:{NotesItem:tt},data:function(){return{view:!0}},props:{notes:Array}};const nt=(0,O.Z)(et,[["render",Z]]);var ot=nt,it={class:"modal__block-title"},rt={class:"modal__block-inputs"},at=(0,i._)("span",null,"Title",-1),st=(0,i._)("span",null,"Content",-1),lt={class:"modal__block-btns"};function ct(t,e,n,r,a,s){return(0,i.wg)(),(0,i.j4)(o.uT,{name:"modal"},{default:(0,i.w5)((function(){return[(0,i._)("div",{class:"modal",onClick:e[6]||(e[6]=function(){return s.closeModal&&s.closeModal.apply(s,arguments)})},[(0,i._)("div",{class:"modal__block",onClick:e[5]||(e[5]=(0,o.iM)((function(){}),["stop"]))},[(0,i._)("h2",it,(0,j.zw)(n.edit?"Изменить заметку":"Добавить заметку"),1),(0,i._)("div",rt,[(0,i._)("label",null,[at,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.title=t})},null,512),[[o.nr,a.title,void 0,{trim:!0}]])]),(0,i._)("label",null,[st,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return a.text=t})},null,512),[[o.nr,a.text,void 0,{trim:!0}]])])]),(0,i._)("div",lt,[(0,i._)("div",{class:"modal__block-btn del",onClick:e[2]||(e[2]=function(){return s.closeModal&&s.closeModal.apply(s,arguments)})},"Отмена"),n.edit?((0,i.wg)(),(0,i.iD)("div",{key:1,class:"modal__block-btn edit",onClick:e[4]||(e[4]=function(){return s.editNote&&s.editNote.apply(s,arguments)})},"Изменить")):((0,i.wg)(),(0,i.iD)("div",{key:0,class:"modal__block-btn edit",onClick:e[3]||(e[3]=function(){return s.addNote&&s.addNote.apply(s,arguments)})},"Добавить"))])])])]})),_:1})}var dt={props:{edit:Boolean,editedNote:Object},data:function(){return{title:"",text:""}},methods:{closeModal:function(){this.$emit("closeModal"),this.title=this.text=""},addNote:function(){if(""!=this.title&&""!=this.text){var t={title:this.title,text:this.text,date:(new Date).toLocaleDateString()};this.$emit("addNote",t),this.title=this.text=""}},editNote:function(){if(""!=this.title&&""!=this.text){var t={id:this.editedNote.id,title:this.title,text:this.text,date:(new Date).toLocaleDateString()};this.$emit("editedNewNote",t),this.closeModal()}}}};const ut=(0,O.Z)(dt,[["render",ct]]);var ft=ut,_t={components:{Navbar:D,Notes:ot,Modal:ft},data:function(){return{search:"",edit:!1,isModalOpen:!1,currentId:1,notes:[],editedNote:null}},mounted:function(){this.getNotes()},computed:{filterNotes:function(){var t=this;return this.search?this.notes.filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())})):this.notes}},methods:{addNote:function(t){t.id=this.currentId++,this.notes.push(t),this.isModalOpen=!1},delNote:function(t){var e=this.notes.findIndex((function(e){return e.id==t}));this.notes.splice(e,1)},changeNote:function(t){this.isModalOpen=this.edit=!0;var e=this.notes.find((function(e){return e.id==t}));this.editedNote=e},editedNewNote:function(t){this.notes.forEach((function(e){e.id==t.id&&(e.title=t.title,e.text=t.text,e.date=t.date)}))},getNotes:function(){var t=localStorage.notes;t&&(this.notes=JSON.parse(t))}},watch:{notes:{handler:function(){localStorage.notes=JSON.stringify(this.notes)},deep:!0}}};const ht=(0,O.Z)(_t,[["render",c]]);var vt=ht;(0,o.ri)(vt).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var a=1/0;for(d=0;d<t.length;d++){o=t[d][0],i=t[d][1],r=t[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/todo/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var d=l(n)}for(e&&e(o);c<a.length;c++)r=a[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(d)},o=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3405)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.3342f35a.js.map