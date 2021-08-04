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
            data: [{
                label: '一级 1',
                children: [{
                  label: '二级 1-1',
                  children: [{
                    label: '三级 1-1-1'
                  }]
                }]
              }, {
                label: '一级 2',
                children: [{
                  label: '二级 2-1',
                  children: [{
                    label: '三级 2-1-1'
                  }]
                }, {
                  label: '二级 2-2',
                  children: [{
                    label: '三级 2-2-1'
                  }]
                }]
              }, {
                label: '一级 3',
                children: [{
                  label: '二级 3-1',
                  children: [{
                    label: '三级 3-1-1'
                  }]
                }, {
                  label: '二级 3-2',
                  children: [{
                    label: '三级 3-2-1'
                  }]
                }]
              },
              {
                label: '一级 2',
                children: [{
                  label: '二级 2-1',
                  children: [{
                    label: '三级 2-1-1'
                  }]
                }, {
                  label: '二级 2-2',
                  children: [{
                    label: '三级 2-2-1'
                  }]
                }]
              },
              {
                label: '一级 2',
                children: [{
                  label: '二级 2-1',
                  children: [{
                    label: '三级 2-1-1'
                  }]
                }, {
                  label: '二级 2-2',
                  children: [{
                    label: '三级 2-2-1'
                  }]
                }]
              },
              {
                label: '一级 2',
                children: [{
                  label: '二级 2-1',
                  children: [{
                    label: '三级 2-1-1'
                  }]
                }, {
                  label: '二级 2-2',
                  children: [{
                    label: '三级 2-2-1'
                  }]
                }]
              },
              {
                label: '一级 2',
                children: [{
                  label: '二级 2-1',
                  children: [{
                    label: '三级 2-1-1'
                  }]
                }, {
                  label: '二级 2-2',
                  children: [{
                    label: '三级 2-2-1'
                  }]
                }]
              },
              {
                label: '一级 2',
                children: [{
                  label: '二级 2-1',
                  children: [{
                    label: '三级 2-1-1'
                  }]
                }, {
                  label: '二级 2-2',
                  children: [{
                    label: '三级 2-2-1'
                  }]
                }]
              }],
              defaultProps: {
                children: 'children',
                label: 'label'
              }
        }
    },
    methods: {
        changeTabs(item,index){
            this.tabNumber = index;
        },
        handleNodeClick(data) {
            console.log(data);
        },
        treeFun(arr){
            var temp = [];
            for(var i = 0; i < arr.length; i++){
                var data = arr[i];
                if(data.children){
                    data.icon = 'icon-youjiantou';
                    temp.push(data);
                    this.treeFun(data.children);
                }else {
                    data.icon = '';
                }
            }
            return temp;
        }
    },
    created() {
        this.data = this.treeFun(this.data);
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
                    val.className = 'inp active'
                }
                val.onblur = function(){
                    val.className = 'inp'
                }
            }
        }
    }
})