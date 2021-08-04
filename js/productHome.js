const vm = new Vue({
    el:"#app",
    data(){
        return {
            headTabs:[
                {
                    id:"",
                    name:"Docs"
                },
                {
                    id:"",
                    name:"文档"
                },
                {
                    id:"",
                    name:"Learn"
                },
                {
                    id:"",
                    name:"Q&A"
                },
                {
                    id:"",
                    name:"代码示例"
                }
            ],
            tabNumber:1
        }
    },
    methods: {
        changeTabs(item,index){
            this.tabNumber = index;
        }
    },
    directives: {
        'code': {
            inserted: function (el) {
                // var parent = el.parentNode
                el.onfocus = function () {
                    el.className = 'inpSearch is_focus'
                }
                el.onblur = function () {
                    el.className = 'inpSearch '
                }
            }
        },
        'focus':{
            inserted:function(val){
                val.onfocus = function(){
                    val.className = 'inp is_focus_inp'
                }
                val.onblur = function(){
                    val.className = 'inp'
                }
            }
        }
    }
})