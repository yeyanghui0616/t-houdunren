import { useRouter } from "vue-router";
import { IMenu } from "#/menu";
import { defineStore } from "pinia";
import router from "@/router";

export default defineStore("menu", {
	state: () => ({
		menus: [] as IMenu[],
	}),
	actions: {
		init() {
			this.getMenuByRoute();
		},
		// 根据路由获取菜单
		getMenuByRoute() {
			this.menus = router
				.getRoutes()
				.filter((route) => route.children.length && route.meta.menu)
				.map((route) => {
					let menu: IMenu = { ...route.meta?.menu };
					menu.children = route.children
						.filter((r) => r.meta?.menu)
						.map((route) => {
							return { ...route.meta?.menu, route: route.name };
						}) as IMenu[];
					return menu;
				})
				.filter((menu) => menu.children?.length);
		},
	},
});