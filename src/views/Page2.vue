<template>
	<div ref="testDiv" class="test">
    <h1>페이지 2</h1>
    <router-link class="link" to="/page1">1 페이지</router-link>
	</div>
</template>

<script>
import * as THREE from 'three/build/three.module.js';

export default {
	data() {
		return {
			container: null,
			camera: null,
			scene: null,
			renderer: null,
		};
	},
	created() {},
	mounted() {
		this.init();
		this.animate();
	},
	methods: {
		init() {
			this.container = document.createElement('div');
			this.$refs.testDiv.appendChild(this.container);

			this.camera = new THREE.PerspectiveCamera(
				60,
				window.innerWidth / window.innerHeight,
				1,
				10000,
			);
			this.camera.position.z = 200;

			this.scene = new THREE.Scene();
			this.scene.name = 'test';
			this.scene.background = new THREE.Color(0xffffff);

			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			this.container.appendChild(this.renderer.domElement);
		},
		animate() {
			requestAnimationFrame(this.animate);

			this.render();
		},
		render() {
			this.renderer.render(this.scene, this.camera);
		},
	},
	destroyed() {
		this.removeMesh();
		this.removeModel();
	},
};
</script>

<style scoped>
.test {
	position: absolute;
	top: 0;
	left: 0;
}
.add {
	position: absolute;
	top: 0;
	left: 500px;
}
.remove {
	position: absolute;
	top: 0;
	left: 700px;
}
.link {
	position: absolute;
	top: 0;
	left: 900px;
	color: red;
}
</style>
