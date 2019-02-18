<template>
	<div class="container">
	    <div class="row">
	        <div class="col-md-10 ml-auto mr-auto">
	            <div class="card card-contact no-transition">
	                <h3 class="card-title text-center" v-text="title"></h3>
	                <div class="row">
	                    <div class="col-md-5 ml-auto">
	                        <div class="card-body">
	                            <div class="info info-horizontal" v-for="item in items" :key="item.id">
	                                <div :class="item.icon_color">
	                                    <i :class="item.icon" aria-hidden="true"></i>
	                                </div>
	                                <div class="description">
	                                    <h4 class="info-title" v-text="item.title"></h4>
	                                    <p v-html="item.description"></p>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                    <div class="col-md-5 mr-auto">
	                        <form role="form" id="contact-form" method="post">
	                            <div class="card-body">
	                                <div class="row">
	                                    <div class="col-md-6">
	                                        <div class="form-group label-floating">
	                                            <label class="control-label">First name</label>
	                                            <input type="text" name="name" class="form-control" placeholder="First Name" v-model="form.data.first_name">
	                                        </div>
	                                    </div>
	                                    <div class="col-md-6">
	                                        <div class="form-group label-floating">
	                                            <label class="control-label">Last name</label>
	                                            <input type="text" name="name" class="form-control" placeholder="Last Name" v-model="form.data.last_name">
	                                        </div>
	                                    </div>
	                                </div>
	                                <div class="form-group label-floating">
	                                    <label class="control-label">Email address</label>
	                                    <input type="email" name="email" class="form-control" placeholder="Email" v-model="form.data.email"/>
	                                </div>
	                                <div class="form-group label-floating">
	                                    <label class="control-label">Your message</label>
	                                    <textarea name="message" class="form-control" id="message" rows="6" placeholder="Message" v-model="form.data.message"></textarea>
	                                </div>
	                                <div class="row">
	                                    <div class="col-md-6">
	                                        <div class="form-check">
	                                            <label class="form-check-label">
	                                                <input class="form-check-input" type="checkbox" v-model="form.data.notRobot"> I'm not a robot !
	                                                <span class="form-check-sign"></span>
	                                            </label>
	                                        </div>
	                                    </div>
	                                    <div class="col-md-6">
	                                        <button type="submit" class="btn btn-primary pull-right" @click.prevent="submit()" v-text="form.submit"></button>
	                                    </div>
	                                </div>
	                            </div>
	                        </form>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				title: "Contact Us",
				items: [
					{
						id: 1,
						icon_color: "icon icon-info",
						icon: "nc-icon nc-pin-3",
						title: "Find us at the office",
						description: "Bld Mihail Kogalniceanu, nr. 8, <br> 7652 Bucharest,f <br> Romania",
					},
					{
						id: 2,
						icon_color: "icon icon-danger",
						icon: "nc-icon nc-badge",
						title: "Give us a ring",
						description: "Michael Jordan <br> +40 762 321 762 <br> Mon - Fri, 8:00-22:00",
					},
				],
				form: {
					endPoint: "/contact",
					data: {
						first_name: "",
						last_name: "",
						email: "",
						message: "",
						notRobot: false,
					},
					submit: "Send Message",
				},
			}
		},
		methods: {
			submit() {
				console.log('submit contact us to server');
			}
		}
	}
</script>

<style>
	
</style>