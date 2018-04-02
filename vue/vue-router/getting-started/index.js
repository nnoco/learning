// 0. 모듈 시스템을 사용하는 경우(예: vue-cli를 이용해서), Vue 및 VueRouter를 가져온 다움 `Vue.use(VueRouter)`를 호출

// 1. 라우트 컴포넌트를 정의
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 라우트를 정의
// 일부 라우트 정의 각 라우트는 컴포넌트에 매핑되어야 함
// "컴포넌트"는 `Vue.extend()`를 통해 생성된
// 실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})

// 4. 루트 인스턴스를 만들고 마운트
// 라우터 옵션을 라우터에 삽입하여
// 전체 응용 프로그램을 라우터가 인식하도록
const app = new Vue({
  router
}).$mount('#app')

