import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state={
	a:5
};

const mutations={ //这里面处理状态（数据）的变化
	add(state){
		alert(state.a)
		state.a++;
	},
	noAdd(state){
		state.a--;
	}
}

const actions={ //你要干什么
	add:({commit})=>{
		commit('add')
	},
	noAdd:({commit})=>{
		commit('noAdd')
	}
}

const getters={ //获取数据
	b(state){
		return state.a;
	}
}

export default new Vuex.Store({
	state,mutations,actions,getters
})