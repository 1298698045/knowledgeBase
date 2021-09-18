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
            tabNumber:1,
            list:[
                {
                  name:'语言',
                  isBook:false,
                  children:[
                    {
                      id:'',
                      name:'C#'
                    },
                    {
                      id:'',
                      name:'C#'
                    },
                    {
                      id:'',
                      name:'Visual Basic'
                    }
                  ]
                },
                {
                  name:'工作负载',
                  isBook:false,
                  children:[
                    {
                      id:'',
                      name:'Web'
                    },
                    {
                      id:'',
                      name:'移动'
                    },
                    {
                      id:'',
                      name:'云'
                    },
                    {
                      id:'',
                      name:'桌面'
                    }
                  ]
                },
                {
                  name:'API',
                  isBook:false,
                  children:[
                    {
                      id:'',
                      name:'Web'
                    },
                    {
                      id:'',
                      name:'移动'
                    },
                    {
                      id:'',
                      name:'云'
                    },
                    {
                      id:'',
                      name:'桌面'
                    }
                  ]
                },
                {
                  name:'资源',
                  isBook:false,
                  children:[
                    {
                      id:'',
                      name:'Web'
                    },
                    {
                      id:'',
                      name:'移动'
                    },
                    {
                      id:'',
                      name:'云'
                    },
                    {
                      id:'',
                      name:'桌面'
                    }
                  ]
                }
              ]
        }
    },
    methods: {
        changeTabs(item,index){
            this.tabNumber = index;
        },
        handleView(item,index){
            for(let i=0; i<this.list.length;i++){
              if(i!=index){
                this.list[i].isBook = false;
              }
            }
            this.list[index].isBook = !this.list[index].isBook;
          },
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