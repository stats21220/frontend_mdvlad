export const API = {
	pageProduct: {
		getPage: process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/",
		getMenu: process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/find",
		getPaths: process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/paths/page"
	},
	product: {
		findProducts: process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
		findProductsPaths: process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find/paths",
		getProduct: process.env.NEXT_PUBLIC_DOMAIN + "/api/product/"
	},
	feedback: {
		create: process.env.NEXT_PUBLIC_DOMAIN + "/api/feedback/create"
	}
};