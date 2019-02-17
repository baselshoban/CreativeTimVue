<template>
	<div>
		<div class="row">
		    <div class="col-sm-5 ml-auto">
		        <div class="info">
		            <div class="icon">
		                <i :class="items[0].icon" aria-hidden="true"></i>
		            </div>
		            <h4 class="title" v-text="items[0].title"></h4>
		            <p v-text="items[0].subtitle"></p>
		        </div>
		    </div>
		    <div class="col-sm-5 mr-auto">
		        <div class="info">
		            <div class="icon">
		                <i :class="items[1].icon" aria-hidden="true"></i>
		            </div>
		            <h4 class="title" v-text="items[1].title"></h4>
		            <p v-text="items[1].subtitle"></p>
		        </div>
		    </div>
		</div>
		<div class="row bottom-line">
		    <div class="col-sm-5 ml-auto">
		        <div class="info">
		            <div class="icon">
		                <i :class="items[2].icon" aria-hidden="true"></i>
		            </div>
		            <h4 class="title" v-text="items[2].title"></h4>
		            <p v-text="items[2].subtitle"></p>
		        </div>
		    </div>
		    <div class="col-sm-5 mr-auto">
		        <div class="info">
		            <div class="icon">
		                <i :class="items[3].icon" aria-hidden="true"></i>
		            </div>
		            <h4 class="title" v-text="items[3].title"></h4>
		            <p v-text="items[3].subtitle"></p>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						id: 1,
						title: "Cash",
						subtitle: "Cash is king” as they say, but is this the best option for your customer base? Many businesses choose to be a “cash only” business for various reasons. Some businesses choose to operate on a “cash only” basis so that they can (illegally) report less on tax documents.",
						icon: "nc-icon nc-money-coins",
						background_type: 1, 
						background_value: "#ffffff00",
						link: false,
					},
					{
						id: 1,
						title: "Online Payments",
						subtitle: "Online payments are going to be the future of convenience and security. The SBA lays out some of the advantages and disadvantages of choosing to adopt this early trend. Online payments will offer businesses a cheaper, faster.",
						icon: "nc-icon nc-bank",
						background_type: 1, 
						background_value: "#ffffff00",
						link: false,
					},
					{
						id: 1,
						title: "Checks",
						subtitle: "Accepting checks seems to be an outdated and risky way of accepting payment, but many businesses still do so. It’s difficult for small businesses to verify whether checks are good or if the account has insufficient funds. Having a check “bounce” will not only hurt your business’s bottom line, but can incur additional fees depending on your financial institution’s policy",
						icon: "nc-icon nc-paper",
						background_type: 1, 
						background_value: "#ffffff00",
						link: false,
					},
					{
						id: 1,
						title: "Credit Cards",
						subtitle: "Credit card payment is the leading method of payment in the world next to cash. This method, however, often comes at a cost. Many credit card companies charge transactional fees (assessed per transaction), flat fees (assessed per month), and incidental fees (assessed under certain situations such as charge-backs). Visa and Mastercard dominate the market as they are widely accepted worldwide.",
						icon: "nc-icon nc-credit-card",
						background_type: 1, 
						background_value: "#ffffff00",
						link: false,
					},
				],
			}
		},
	}
</script>

<style>
	
</style>