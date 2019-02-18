<template>
	<div class="container">
	    <div class="row">
	        <div class="col-md-8 ml-auto mr-auto text-center">
	            <h2 class="title" v-text="title"></h2>
	            <h5 class="description" v-text="description"></h5>
	        </div>
	    </div>
	    <div class="row">
	        <div class="col-md-6">
	            <div class="ipad-container">
	                <img :src="img"/>
	            </div>
	        </div>
	        <div class="col-md-4 offset-1">
	            <div class="info info-horizontal" v-for="item in items" :key="item.id">
	                <div :class="item.icon_color">
	                    <i :class="item.icon" aria-hidden="true"></i>
	                </div>
	                <div class="description">
	                    <h4 class="info-title" v-text="item.title"></h4>
	                    <p v-text="item.description"></p>
	                </div>
	            </div>
	            <!-- <div class="info info-horizontal">
	                <div class="icon icon-success">
	                    <i class="nc-icon nc-ruler-pencil" aria-hidden="true"></i>
	                </div>
	                <div class="description">
	                    <h4 class="info-title"></h4>
	                    <p></p>
	                </div>
	            </div>
	            <div class="info info-horizontal">
	                <div :class="color">
	                    <i class="nc-icon nc-tie-bow" aria-hidden="true"></i>
	                </div>
	                <div class="description">
	                    <h4 class="info-title">Attendance and Time Off Policies</h4>
	                    <p>SAttendance policies set rules and guidelines surrounding employee adherence to work schedules.</p>
	                </div>
	            </div> -->
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				title: "Our Policy",
				description: "The more formalized version launching today brings a slate of corporate partners and a more structured application review process.",
				img: "creative/assets/img/sections/ipad.png",
				items: [
					{
						id: 1,
						icon_color: "icon icon-info",
						icon: "nc-icon nc-atom",
						title: "Employee Conduct Policies",
						description: "An employee conduct policy establishes the duties and responsibilities each employee must adhere to as a condition of employment.",
					},
					{
						id: 2,
						icon_color: "icon icon-success",
						icon: "nc-icon nc-ruler-pencil",
						title: "Equal Opportunity Policies",
						description: "Equal opportunity laws are rules that promote fair treatment in the workplace. Most organizations implement equal opportunity .",
					},
					{
						id: 3,
						icon_color: "icon icon-danger",
						icon: "nc-icon nc-tie-bow",
						title: "Attendance and Time Off Policies",
						description: "Attendance policies set rules and guidelines surrounding employee adherence to work schedules",
					},

				],
			}
		}
	}
</script>

<style>
	
</style>