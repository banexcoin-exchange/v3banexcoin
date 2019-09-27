/* DISAPPERING ICONS */
function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function upper(){
	var alto = $('div#menu-wrapper').height();
	$('.cointer img').each(function(i, obj) {
		var x = randomIntFromInterval(3000,5000);
		//console.log(x);
		$(this).animate({marginBottom: (alto - 300) + 'px', opacity: 0 }, x);
		/*$(this).fadeOut('slow', function(){
			$(this).fadeIn();
		});*/
		$(this).animate({marginBottom: '0px'}, 200);
		$(this).animate({opacity: 1 }, 300);
		$(this).animate({width: '22px' }, 300);
	});
	
}
upper();
setInterval(upper, 1000);
/* FIN DE DISAPPERING ICONS */

/*setInterval(function(){
	$(".testimonial-carousel-controls div.next").trigger('click');
}, 3000);*/

function nextStep(){
	if(($("li.step.done").length == $("li.step").length)){
		$("li.step:first-child").addClass("done");
	} else {
		var step = $("li.step.current");
		if(step.hasClass("active")){
			var lin = $("li.step.active");
			lin.addClass("done");
			$("li.step.done").next().addClass("active");
			$("li.step.done.active").removeClass("active");
		} else if(step.hasClass("done")) {
			$("li.step.done").next().addClass("active");
		}
	}
	
	$("li.step.current").next().addClass("current");
	$("li.step.done.current").removeClass("current");
	
	if(($("li.step.done").length == 4)){
		$("li.step").removeClass("done");
		$("li.step:first-child").addClass("active current");
	}
}
function Menu(){
	var check = $('.dropdown-menu-new');
	check.slideToggle(1000);
	check.toggleClass('hid');
	
}
function closeMenuB(){
	var check = $('.dropdown-menu-new');
	check.addClass('hid');
	check.slideUp(1000);
}
$(function () {
	var attrimg = $('img.ap-logo__img').attr('src');
	$('button.tgg-new').on('click', function(e){
		var check = $('.dropdown-menu-new');
		if(check.css('display') == 'none'){
			$('img.ap-logo__img').attr('src', '/local/logos/logo-banexcoin-white.svg');
		} else {
			$('img.ap-logo__img').attr('src', attrimg);
		}
		check.slideToggle(1000);
		check.toggleClass('hid');
		e.stopPropagation();
	});
	$('*:not(button.tgg-new)').on('click', function(event){
		var check = $('.dropdown-menu-new');
		check.addClass('hid');
		check.slideUp(1000);
		$('img.ap-logo__img').attr('src', '/local/logos/logo-banexcoin.svg');
	});
});
$(document).ready(function(){
	
	
	/*$('.monedas-list > a').on('mouseover', function(){
		var thisi = $(this).find('div[moneda="coin"]');
		var flipResult = Math.random();
		$(thisi).removeClass();
		setTimeout(function(){
		  if(flipResult <= 0.5){
			$(thisi).addClass('heads');
			//console.log('it is head');
		  }
		  else{
			$(thisi).addClass('tails');
			//console.log('it is tails');
		  }
		}, 100);
	  });*/
	console.log('%cDetente!', 'color: red;font-size:2.5rem;font-weight:bold;');
    console.log('%c(•_•)', 'font-size:1.25rem;line-height:1.1;margin-top:.5em');
			
	setInterval(nextStep, 2500);
	// Variables de idioma
	var arrLang = {
		'en' : {
			'langactual' : '<img src="/local/landing-page/images/country/estados-unidos.png" width="20px"/>    &#9660;',
			'welcome' : 'Welcome to Banexcoin',
			'p_welcome' : 'Exchange your Digital Assets in the safest crypto platform in America.',
			'inicio' : 'Home',
			'login' : 'Login',
			'signup' : 'Sign Up',
			'signup_top' : 'Sign Up',
			'features' : 'Features',
			'more_features' : 'More features',
			'about' : 'About',
			'we' : 'About us',
			'contact' : 'Contact',
			'user_friendly' : 'Friendly on multiple devices',
			'user_friendly_desc' : 'We offer a unique exchange experience for all our users, through a secure,<br> reliable platform that also works on mobile devices so you can perform your transactions easy, fast and secure wherever you are.<br/><br/>',
			
			'steps_to_follow' : 'Follow these simple steps',
			'get_registered' : 'Get registered!',
			'get_registered_desc' : 'The platform will guide you throughout the registration process, which will not take longer than a few minutes, by asking your information in order to complete the necessary steps to have your own account in Banexcoin.',
			'get_verified' : 'Get verified!',
			'get_verified_desc' : 'In Banexcoin always thinking about your security we have 3 levels of verification, enter the information that we request and take your exchanges to another level.',
			'deposit_your_funds' : 'Deposit your funds!',
			'deposit_your_funds_desc' : 'Add funds to your Banexcoin account with either fiat currency, transferring from your own bank account, your credit card or any of the cryptocurrencies we handle.',
			'exchange' : 'Exchange!',
			'exchange_desc' : 'You are ready! Start buying and selling the digital assets of your preference with the funds of your Banexcoin Account quickly and safely.',
			
			// MONEDAS
			'monedas' : 'Coins',
			'key_features' : 'Features',
			
			// FEATURES 
			'intercambio_tiempo_real' : 'Real-time exchange',
			'principales_criptos' : 'Use the main cryptocurrencies of the moment',
			'informacion_segura' : 'Your information is safe',
			'conectate_cualquier_parte' : 'Connect from anywhere',

			'our_allies' : 'Our allies',

			'last_news' : 'Last News',

			/* MENU LINKS */
				// us
			'foot_about_us' : 'About Us',
			'foot_features' : 'Features',
			'foot_blog' : 'Blog',
			'foot_fees' : 'Fees and Comissions',
			'foot_currencies' : 'Currencies',
			'foot_levels' : 'Levels of clients',
			'niveles-clientes' : 'Levels of clients',
			'niveles-clientes-parr' : 'In Banexcoin we handle different levels that accommodate all our clients.',
				// support
			'foot_support' : 'Support',
			'foot_api' : 'API',
			'foot_security' : 'Security',
			'foot_support_center' : 'Support Center',
				// policies
			'foot_policies' : 'Policies',
			'foot_kyc' : 'KYC Policies',
			'foot_aml' : 'AML Policies',
				// sub footer
			'foot_term_cond' : 'Terms and Conditions',
			'foot_privacy' : 'Privacy policies',
			'foot_cookies' : 'Cookies Policies',

			// TERMINOS Y CONDICIONES
			'key_terminos_condiciones' : 'Terms and Conditions',
			'term_last_updated':'Last Updated: Tuesday, August 13, 2019, 10:38 AM (GMT-5)',
			
			'term_descripcion_title' : '1.	Description',
			'term_descripcion' : 'These Terms and conditions (the “Terms”) set out under which operates this website, banexcoin.com (http://www.banexcoin.com/; “Banexcoin”, hereon the “Site” or the “Platform”). The user must read the Terms carefully and do not use the Platform unless they accept present Terms and Conditions. All and any use of the Platform automatically implies acceptance of the Terms.' +
				'The Platform, managed by Banexcoin S.A. allows Users to buy and sell cryptocurrencies accepted by the exchange through a mandate given to Banexcoin for that specific  purpose. It also allows registered Users on the Platform (“Members” or “Users”) the transfer of cryptocurrencies authorized in the Exchange and use the same to pay products and services. Depending on the country of residence, Users may not have access to all the functionality of the Platform. It is the responsibility of each User to ensure the feasibility of conducting transactions in cryptocurrency jurisdiction.' +
				'When you create an account to use the Platform (Banexcoin Account) Users accept and guarantee:' +
				'<ul class="lista_term">' +
					'<li><b>a)</b>	They had read and accepted these Terms.</li>' +
					'<li><b>b)</b>	Who Have The full legal capacity to accept these Terms and to perform Transactions and transfers on the Platform.</li>' +
					'<li><b>c)</b>	That expressly authorize Banexcoin to have personal data that may be handled in addition to Banexcoin by companies providing verification of identity and reputation, etc. as set forth in these Terms and conditions, as well as the AML Policies and KYC Policies of Banexcoin..</li>' +
					'<li><b>d)</b>	That will provide reliable, real, complete and up-to-date information to Banexcoin about of his own person.</li>' +
					'<li><b>e)</b>	Knowledge about the nature, legal situation, and volatility of the value of the Cryptocurrencies and the Bitcoin in particular, and that they assume in a completes the risk implicit in making transactions with such assets.</li>' +
					'<li><b>f)</b>	That in any time might be establishing sanctioning regulations to prohibit and/or restrict the realization of transactions with cryptocurrencies in his or her jurisdiction of residence, can affect part or completely the way that they had performed.</li>' +
					'<li><b>g)</b>	That is responsible for determining whether a specific transaction is appropriate for them, based on the documentation presented to Banexcoin and that keeps in accordance with its personal situation; patrimonial, economic and fiscal.</li>' +
					'<li><b>h)</b>	What Banexcoin would require additional information and/or documentation in the event of considering it necessary, committing himself to supply the same in the deadlines that  Banexcoin had set previously.</li>' +
					'<li><b>i)</b>	Que Banexcoin podrá requerir mayor información y/o documentación en caso de considerarlo necesario, comprometiéndose el usuario a suministrar la misma en los plazos que Banexcoin establezca.</li>' +
					'<li><b>j)</b>	Banexcoin reserves the right, in its sole discretion, to amend these Terms in any time. Users will be notified of such changes in advance to its validity through its Banexcoin account. Their continuity in the use of Platform after notifying the changes will mean full acceptance of it. Each user accepts that all subsequent transactions that are made will be subject to the current Version of all the here expressed Terms.</li>' +
				'</ul>',
			'term_definicion_title' : '2.	Definitions',
			'term_definicion' : '<b>Altcoin:</b> Simplified construction of the words "Alternative & coin". The term Altcoin refers to cryptocurrencies that derive from the Bitcoin source code or other known cryptocurrencies that, in some cases, are "forks" of Bitcoin.<br/>' +
					'<b>ATH:</b> Acronym for All Time High. Historical Maximum of a price.<br/>' +
					'<b>Bear Market o Bearish (Oso):</b> Declining expectation of prices in a market.<br/>' +
					'<b>Bitcoin / Bitcoin (BTC):</b> Bitcoin is generally used to refer to the network or protocol, and bitcoin (in lowercase) to refer to currency units. Bitcoin is characterized by being decentralized, not supported by any government or central bank, based on blockchain technology and its open source community.<br/>' +
					'<b>Bitcoin Cash (BCH):</b> Cryptocurrency that surge on August 1, 2017, as a result of the division of the Bitcoin community around the debate on scalability. In the starting block 478,558 is created the new currency that adopts the name of Bitcoin Cash. from this hard fork of the Bitcoin chain, in the new chain is they started to create blocks of 8 Mb in size instead of 1Mb of Bitcoin.<br/>' +
					'<b>Blockchain:</b> Distributed transactional Database, consisting of block chains designed to avoid modification once a data has been published. This is achieved through peer-to-peer (P2P) networks, with consensus generated through a test algorithm of working (PoW) and linking the blocks cryptographically with a reliable time stamping.<br/>' +
					//'<b>Blockchain privada o permisionada (permissioned):</b>  Aquella en la que el proceso de consulta, validación y participación están limitados a unos nodos. Tanto los accesos a los datos de la cadena de bloque como el envío de transacciones para ser incluidas, están limitadas a una lista predefinida de nodos o entidades.<br/>' +
					//'<b>Blockchain pública o sin permiso (permissionless):</b> Aquella en la que no hay restricciones ni para leer los datos de la cadena de bloques ni para validar transacciones para que sean incluidas en la cadena de bloques. En ellas es fácil entrar y salir, son transparentes, están construidas para operar en un entorno sin confianza.<br/>' +
					//'<b>Blockchain Tamper Evident:</b> Cadena de bloques en la que cualquier modificación es evidente y visible para toda la red una vez se ha realizado. Lo que significa que una Blockchain Tamper Evident puede ser alterada, aunque dicha alteración será visible para todos los participantes de la red.<br/>' +
					//'<b>Blockchain Tamper Proof (a prueba de manipulación):</b> Cadena de bloques con un nivel de seguridad altísimo dado que no se puede modificar nada (o es altamente improbable que alguien tenga acceso a los recursos necesarios para hacerlo). Por lo que, una Blockchain Tamper Proof como la de Bitcoin, a día de hoy es inmutable.<br/>' +
					'<b>Genesis Block:</b> Refers to the first block that composes a string of blocks or blockchain. In the case of Bitcoin, the first public blockchain, dates from January 3, 2009.<br/>' +
					'<b>Bull Market or Bullish: </b>Expectation of price increases in a market.<br/>' +
					'<b>Public and Private Key:</b> We can think of the public key as if it were the number of a bank account and in the private key as if it were the secret PIN. The public key is used to receive cryptocurrencies, and the private key is used to sign the transactions to spend those cryptocurrencies. A private key and a public key are mathematically related, in fact, the public key derives from the private key.<br/>' +
					'<b>Cold Storage:</b> Keep the private key of a cryptocurrency on paper or with a specific hardware (such as Trezor or Ledger Nano).<br/>' +
					'<b>Confirmation:</b> Occurs when a transaction in a blockchain has already been processed by the network. The Transactions of a blockchain receive confirmations once they have been included in a block, which in turn has already been connected to the Next block of the chain. This Ensuring the immutability of the transaction.<br/>' +
					'<b>Smart Contract:</b> Software that runs on a blockchain in a decentralized way. These are applications that run exactly as they were programmed without the possibility of downtime, censorship, fraud or interference from third parties. Works as a sentence If-Then of any other computer program with the difference that is made to interact with real assets. When a condition is triggered Pre-programmed, not subject to any kind of human valuation, the intelligent contract executes the corresponding contractual clause. They can interact with other contracts, make decisions, store data, and send cryptocurrencies or tokens. Exist and will be executable while the entire network exists, would only disappear if they were programmed to self-destruct.<br/>' +
					'<b>Cryptography:</b> Encryption or coding techniques intended to altering the linguistic representations of certain messages in order to make them unintelligible to unauthorized recipients. One of recurring cryptographic algorithms when studying the Bitcoin protocol is SHA-256.<br/>' +
					'<b>Cryptocurrency:</b> Is a digital exchange medium that uses cryptography to secure financial transactions, control the creation of additional units and verify the transfer of assets, they have no legal course, nor are they issued, nor are guaranteed by any country or jurisdiction. To date the BTC, as well as the other cryptocurrencies, has not been recognized as currencies by different central banks/governments; It represents a high volatility asset whose fluctuations exceed the usual assets traditional financial some examples: bitcoin (BTC), Litecoin (LTC), Ether (ETH).<br/>' +
					'<b>Banexcoin Account:</b> Once the user has accepted the Terms and provided to Banexcoin of the information and documentation requested to comply with the policies of the Platform and has received approval of it to perform transactions on the Platform, will enable a personal account for that user (“Banexcoin Account”). The Banexcoin Account enables its holder to make transactions on the Platform, maintain balances in Cryptocurrencies and other currencies, as well as make credits and debits in the Banexcoin Account, to carry out transactions and transfers to bank accounts of their ownership. To provide balance to the Banexcoin Account, the user must transfer BTCs or any Cryptocurrency authorized by the Platform to the public wallet associated with the Banexcoin Account, or funds to the Banexcoin bank account, an affiliate of Banexcoin or a Banexcoin service provider as indicated on the Platform. The Platform does not use or dispose of such balances under any circumstances.<br/>' +
					'<b>DApp:</b> Decentralized Application.<br/>' +
					'<b>Decentralization:</b> Feature of systems that do not depend on a central point or single point to function. It Promotes independence and complicates censorship and control.<br/>' +
					'<b>Address:</b> In the world of cryptocurrencies refers to the string of numbers and letters that are normally produced from the public and private keys and that we could define as the fingerprint of those keys. The address (for example 3avKnSEYstWetqOFn1Au3m4GFg7xJaNVN2) is a smaller version of a public address. The private key is the one that gives access to the cryptocurrency registered in the public and must, therefore, be kept secret. The public address is the "account" that we can share with the rest of the network to send us cryptocurrencies and it is the public address of another user what we use to indicate in a transaction the recipient of the funds we send.<br/>' +
					'<b>EOS:</b> Native Cryptocurrency of EOS:IO protocol<br/>' +
					'<b>EOS.IO:</b> Is a blockchain protocol that functions like an intelligent contract Platform and a decentralized operating system designed to support decentralized applications on an industrial scale (DApps). The Platform can handle millions of transactions in one second, one of the characteristics that distinguish it from other similar Platforms. The protocol EOS.IO emulates most of the attributes of a real computer, including hardware with computing resources evenly distributed among cryptocurrency EOS holders.<br/>' +
					'<b>Ether (ETH):</b> Account unit of Ethereum or token. It is a necessary element, a fuel, to operate Ethereum. It is A form of payment made by the customers of the Platform to the machines that execute the requested operations. It is the incentive that ensures that developers write quality applications and that the network stays healthy as people receive compensation for their resources.<br/>' +
					'<b>Dash (initially known as Darkcoin and XCoin):</b> It\'s a peer-to-peer open source cryptocurrency that offers the same features as Bitcoin but also has advanced features, including instant transactions (InstantSend), private transactions (PrivateSend), and decentralized governance (DGBB). Dash uses a two-tier architecture to boost his network. The first level consists of miners who secure the network and record transactions in the blockchain. The Second level consists of Masternodes that enable the advanced features of Dash. Dash was initially released as XCoin (XCO) on January 18, 2014. On February 28th, the name was changed to "Darkcoin". On March 25, 2015, Darkcoin was renamed as “Dash". Dash is a pun for "Digital Cash".<br/>' +
					'<b>Ethereum:</b> Open source Platform, decentralized and based on the model blockchain that allows the creation of intelligent contracts. It uses a PoW-type consensus system, although it is in a development phase where the PoS system is being tested. Uses a token called Ether that allows the execution of smart contracts on your network using a virtual machine (Ethereum Virtual Machines or EVM) that works in a distributed way thanks to the contribution of the miners who are rewarded with Ethers.<br/>' +
					'<b>FOMO:</b> Acronym for Fear of missing out. Afraid to miss a price hike.<br/>' +
					'<b>Fork:</b> A situation in which a blockchain is divided into two separate strings temporarily or permanently. Occurs when you take the source code of a project and create a new project from it with a new address. A hard fork occurs when a chain of blocks is divided into two separate incompatible chains, this it is a consequence of the use of two incompatible rule sets that attempt to govern the system. A soft fork a rule change that creates blocks recognized as valid by the previous software, that is, is compatible with previous versions.<br/>' +
					'<b>FUD:</b> Acronym for fear, doubt, and uncertainty. Bearish market Propaganda.<br/>' +
					'<b>Hot Wallet:</b> A wallet that is always connected to the blockchain. The stored coins can be quickly exchanged with other members of the network or be used for trading.<br/>' +
					'<b>ICO:</b> Acronym for initial coin offering. It is used to finance the development of new decentralized protocols in blockchain and is inspired by the concept of OPV although they are difficult to be compared.<br/>' +
					'<b>Lightning Network:</b> Solution proposed to solve the problem of scalability of Bitcoin, allows the processing of payments and micropayments almost instantaneously. The Network uses a protocol as a secondary layer to Bitcoin.<br/>' +
					'<b>Mandator:</b> The user requesting the purchase or sale of any currency or cryptocurrency to the Platform, in accordance with these Terms.<br/>' +
					'<b>Litecoin (LTC):</b> Litecoin was launched through a customer open source in Github on October 7th, 2011. It\'s a cryptocurrency supported by the network P2P and a project of open source software posted under license MIT. Inspired and practically identical in its technical aspect to Bitcoin (BTC), the creation and transfer of Litecoin is based on an open source cryptographic protocol which is not administered by any central authority. Litecoin was intended to be an electronic currency alternative of Bitcoin and it offers three main differences. First, the Litecoin network performs a block processing every 2.5 minutes instead of every 10 minutes, allowing faster transaction confirmation. Second, the Litecoin network will produce approximately 4 times more units than Bitcoin or about 84 million of Litecoins. Third, Litecoin uses the Scrypt function in its work test algorithm: A sequential hard memory function conceived for the first time by Colin Percival, facilitating mining, as it does not require sophisticated equipment as in the case of Bitcoin. Each Litecoin is fractionated into 100 million smaller units, defined by eight decimals.<br/>' +
					'<b>Market Cap (Market Capitalization):</b> Total Offer of the number of cryptocurrencies or tokens multiplied by the quotation of the cryptocurrencies at that time.<br/>' +
					'<b>Fiat Coin:</b> Legal tender Money. Only central banks have the power to issue fiat money, but commercial banks can create it through loans. The Dollar, Euro and Peruvian Sol are fiat coins.<br/>' +
					'<b>Wallet:</b> Software that stores the private keys needed to access the cryptocurrencies registered in a public address or key to spend. There are several types of purses depending on how the private key is stored. Some use the exchanges as online wallets (Banexcoin, Blockchain.info, Kraken, etc.) and others use physical wallets (Trezor, Ledger Nano, paper), the latter being the safest. In any of its forms, if you lose the private key you lose the money.<br/>' +
					'<b>Monero (XMR):</b> Is an open source cryptocurrency created in April 2014, which prioritizes privacy and decentralization, Monero uses a public transaction log and the new units are created through a process called "mining". Its objective is to improve the previous designs of cryptocurrencies, hide the identity of issuers and receivers and the amounts of transactions, as well as to make the mining process more equal.<br/>' +
					//'<b>Mooning:</b> Precios que se van por las nubes, en inglés se describe como “ir a la luna”.<br/>' +
					'<b>OTC:</b> its acronyms of Over-The-Counter, refers to an operation that is not performed in a formal bag. Instead, most OTC operations are made between two parts, and are often made through a formal market. OTC trading is less regulated than bag operations, creating a number of opportunities, while some risks to be aware of.<br/>' +
					'<b>Platform:</b> It refers to the technical structure, functional and organizational managed by Banexcoin S.A. that allows Users to realize purchases and sales of cryptocurrencies and fiat currencies handled in the exchange through a mandate given to Banexcoin, as well as transfers to third parties and make collections and payments.<br/>' +
					'<b>Multisignature:</b> It\'s a form of technology used to add security to a portfolio\'s transactions. So that the portfolio can transaction it is necessary for several Users to approve such transactions.<br/>' +
					'<b>Transaction Price:</b> The total price to be paid or received by the Principal for each transaction made on the Platform.<br/>' +
					'<b>Price per Currency:</b>  It is the price deployed at any time by the Platform for 1 (one) BTC or those cryptocurrencies authorized by the Platform and which reflects the amount for which a unit of them can be purchased or sold at the time of making any transaction. The Price Per Currency is expressed in the currencies supported by the Platform.<br/>' +
					'<b>Ripple (XRP):</b>  It is a project based on a free software that pursues the development of a credit system based on the end-to-end paradigm. Each Ripple node functions as a local change system, so that the entire system forms a decentralized mutual bank. Taken to the extreme, the Ripple network is a distributed social network service based on honor and trust among the people existing in the real world social networks. In this way, financial capital is based on social capital. A reduced version of the ripple network would consist of an extension of the existing hierarchical banking system, in which alternative payment routes would exist that would not pass through a central bank. Technically speaking, Ripple is the network and XRP is the money or currency in that network however they usually refer to XRP as Ripple. This is not completely correct, but in general it does not cause any confusion.<br/>' +
					'<b>Stablecoin:</b> Stablecoins are cryptocurrencies designed to minimize price volatility in relation to a "stable" asset or asset basket. A stablecoin can be linked to a currency Fiat, or to exchange commercialized products (such as precious metals or industrial metals). It is said that stables backed by coins Fiat or products are directly centralized, while those that use other cryptocurrencies are considered decentralized.<br/>' +
					'<b>Tether (USDT):</b> Cryptocurrency launched in 2014 by Tether Limited, Tether is a token that uses the Bitcoin blockchain infrastructure and promises to back up its own digital tokens, called Tethers with US Dollars in a reserved bank account. A Tether is equivalent to an American dollar, so it is considered a stablecoin. While the value of the Tether is linked to the U.S. dollar, some bags do not offer direct pairings USD/USDT, and you will need to use bitcoin or another cryptocurrency to operate with Tether.<br/>' +
					'<b>Token:</b> Unit of value. Digital asset hosted on a blockchain that allows its owner to attribute it to a third party through the blockchain. Allows in its configuration several layers of value, which makes it a kind of trunk which, according to their programming, can be included one or various rights.<br/>' +
					//'<b>Tokenomics:</b> Estudio de la creación de incentivos económicos basados en la creación de unidades de valor sobre la cual se pueden crear modelos de negocio auto-gobernables, que empoderen al usuario para interactuar con sus productos, facilitando la distribución y compartiendo los beneficios entre todos los participantes<br/>' +
					'<b>Transaction:</b> Is the operation of purchase (or sale) of BTCs or any other cryptocurrency authorized in the exchange and realized by the Platform in fulfillment of the mandate given by a constituent, in the currencies supported on the Platform and at the price indicated on the Platform at the time in which the transaction is agreed (the transaction price), as well as the cryptocurrencies transfer of the User account for the acquisition of goods or services.<br/>' +
					'<b>USD Coin (USDC):</b> Cryptocurrency that goes into the group of calls Stablecoin because its value is anchored to a US dollar by the fact that Centre, the mercantile company that mint USDC, collectively deposits a dollar for each USDC, These funds are deposited in a special bank account that is constantly monitored and audited, is a token of Ethereum and every USD Coin It is divisible up to 0.000001 parts with value. <br/>' +
					'<b>User:</b>  Any account holder registered in Banexcoin.<br/>' +
					'<b>XRP:</b> Cryptocurrency used in the Ripple protocol, it originates in the year 2012 in Ripple Labs with a maximum number of one hundred million XRP already created, ate the present time (May 2019), 42% of the stock in circulation is negotiated in markets. The remaining 58% is managed by Ripple itself.<br/>' +
					'<b>Zcash (ZEC):</b> It\'s a cryptocurrency intended to use the cryptography to provide a more advanced method of privacy to its Users, compared to other cryptocurrencies such as bitcoin. The old protocol of Zerocoin It was improved and became the Zerocash system, which then developed in the cryptocurrency Zcash in 2016. The cryptographic protocol development and the reference implementation It is run by Zerocoin Electric Coin Company, colloquially called Zcash Company.<br/>',
					'term_cuenta_title' : '3.	Your Banexcoin Account',
			'term_cuenta' : 'Each User will complete the data and send all the documentation and information requested by the Platform, and other documents that let you know your real situation personal, economic, financial and fiscal, in order to register your Banexcoin account. Until as long as this happens and the information provided is verified, the Platform you may limit or impede your operations in the same. Users are responsible for maintaining the confidentiality of the information in their Banexcoin account, including your password and transactions. Users will be the only ones responsible for any act carried out through the Platform through the use of your Banexcoin account. Users should not attempt to gain unauthorized access to the Site, and any attempt to do it or to help others (Users or third parties) to do so or distribution of instructions, software or tools for this purpose will result in the termination of the accounts of these Users, reserving Banexcoin the ability to start all legal actions that may correspond to law. Users are committed to providing reliable, real, complete and accurate information and documentation updated to the Platform, as required either in the registration process and throughout the relationship; and keep that information and documentation up to date.<br/><br/>' +
				'Users can only have one Banexcoin account account at any given time, and not they can create or use accounts that are not their own. The creation and use of some Banexcoin accounts could be cataloged as offenders and may result in the immediate suspension and/or closure of all Banexcoin accounts of a user, and his pending transactions.<br/><br/>' +
				'The Platform may require additional information from a user when deemed necessary in order to comply with money laundering prevention policies AML y financing of terrorism, the source of funds, knowledge of the client KYC or similar.  Certain cases the translation, certification, legalization of certain documents, including apostilles, may be required.<br/><br/>' +
				'Users must provide a bank account to show Its ownership with which it will operate in the Platform. transfers to the account will not be accepted Banexcoin if they do not come from the bank account provided by the user.<br/><br/>' +
				'To mobilize balances in total or partial form, the user must request a transfer to the bank account through the Platform, which will run within the two banking business days to as per request. Under no circumstances will balances be transferred off the Banexcoin account without having an owner user\'s instruction through the Platform. The Platform reserves the right to limit the jurisdictions where they are accepted Bank accounts, and/or reject the bank account proposed by the user.<br/><br/>' +
				'Accounts and/or transactions may be suspended until satisfactory completion these Terms and regulations could apply. The Platform may request information at any time after the order of the competent authority or by an application of any applicable policy, law or regulation. Accounts should be used strictly for the purposes defined in these Terms.  Will be valid and binding all notification made to the email address user-indicated electronically at the time of the subscription for the account opened like this as those sent to the address indicated by the user at your Banexcoin account.<br/><br/>',
			'term_mandato_title' : '4.	Mandate for Cryptocurrency Purchase',
			'term_mandato' : 'I. The mandator gives plain faculty to Banexcoin to acquire BTC or any other cryptocurrency or Altcoin authorized by the Platform on the account and order of the mandator, under the terms and conditions indicated in the present.<br/>' +
				'II. The implementation of the mandate by Banexcoin is will be conditioned on: 1) the existence of balance in favor of the mandator in your Banexcoin account; and 2) The execution instruction given by the mandator on the Platform, indicating the amount of BTCs or crypto assets authorized to acquire (or sell), the amount and transaction price.<br/>' +
				'III. Banexcoin will carry out its best efforts to provide the balances in the Banexcoin account in short time after credit in the bank account from Banexcoin will be indicated, estimated that the accreditation will be made the following banking labour day. The amount received will debit taxes and/or any other bank expenses that may correspond and then the amount  should be acredited in the Banexcoin account of the user. It is the user\'s responsibility to notify Banexcoin of any wire transfer to the bank account of Banexcoin by email at bancos@banexcoin.com.  Banexcoin will send a notification by Email to the mandator at the time that accreditation be at your Banexcoin account.<br/>' +
				'IV. From the moment Banexcoin account has a balance, the user will be able to impart cryptocurrencies purchase instructions through the Platform.<br/>' +
				'V. The deadline for delivery of the instructions shall be 60 workers days, counted from the moment the balances in the Banexcoin account of the user are available.<br/>' +
				'VI. Any instruction thus imparted will be irrevocable and generates obligations binding and executable for the mandator and Banexcoin.  Each transaction as well held will have a charge that will be informed before performing the same which one is deducted from the Banexcoin account.<br/>' +
				'VII. All Crypto assets authorized by Platform acquired under the present will be credited in the balance corresponding of your Banexcoin account once accredited then Banexcoin will have given full compliance to their obligations in relation to bliss transaction. The conservation and management of the wallet and its balances is at all times the sole responsibility of the mandator. In the event that the mandator sold BTC or any of the crypto assets authorized through the Platform Banexcoin, the product of such sale will be added into the Banexcoin account, once deducted all the charges and commissions applicable.<br/>' +
				'VIII. Once elapsed the time limit indicated in point V without the user having submitted any instruction; Banexcoin will restore the balance from the Banexcoin account to the user´s associated bank account deducting the corresponding charges and commissions.<br/>',
			'term_plataforma_title' : '5.	Platform Obligations',
			'term_plataforma' : 'Users accept and agree that the Platform does not guarantee the execution of all the user\'s orders and is not responsible for technical reasons or any regulations outside the Platform or for example: communication failures between the user\'s internet access provider to the global network and/or the Platform.  The Platform does not provide advice on the legality, taxes, insurance or investments, even in respect of transactions carried out in the Platform.',
			'term_usuarios_title' : '6.	Users Obligations',
			'term_usuarios' : 'Users demonstrate and guarantee that they will only use the Platform to perform transactions in accordance with the conditions detailed in these Terms and which have the legal capacity for performing them.  The user guarantees that any amount deposited in your Banexcoin account comes from legitimate sources and that all transactions and transfer to your bank account carried out shall have a lawful object.' +
				'Users ensure that they will not use the Platform to perform illegal activities of any kind, including, but not limited to, the laundering of assets and financing of the Terrorism, Fraud, scams and other deceptions or Illicit. They also agree not to use the Platform in a way undue than involves some mode reduce the performance and operational capacity of the same.',
			'term_cargos_omisiones_title' : '7.	Fees and Commissions',
			'term_cargos_omisiones' : 'Fees consideration in favor of Banexcoin is a percentage of the amount of any transaction or Bank transfer made through the Platform, percentage that will be informed by the Platform before running any transaction or transfer, bearing to each transaction or transfer and is debited from the Banexcoin account automatically. No transactions or Bank transfers will be made if there was not enough balance for the same, or for the payment of the consideration to Banexcoin.  The Electronic invoice will be sent to the email indicated by the user in his Banexcoin account. To see the details of the commissions please visit the section applicable fees in Banexcoin.com.',
			'term_normas_aplicables_title' : '8.	Compliance with applicable regulations',
			'term_normas_aplicables' : 'Banexcoin and all of it´s affiliates related to any transaction will enforce any current or future regulations applicable to them, including but not limited to, any obligation to report certain operations to the control authorities of the financial movements OFAC, prevention and control of money laundering of assets or the financing of terrorism, tax agencies, among others, providing all the information and/or documentation required by these agencies.  In the same way, Banexcoin will submit to compliance with any tax liability in your charge related to transactions, including but not limited to the obligation to make retentions if applicable.  The user is solely responsible for giving compliance with their own tax obligations in relation to transactions and the Banexcoin account. The user assumes full responsibility to comply with all tax liability in relation to Banking transfers from or to his own account, as well as the legality of the transfer requested and guarantee to Banexcoin that there is not required to make any retention on them.' +
				'As a policy of Banexcoin in the prevention of the laundering of assets and the financing of terrorism, transactions and/or cash operations will not be accepted; as well as will not accept turns and/or transfers from third parties.  All transactions, without exception, will be made when the funds are rotated and/or transferred to the account of Banexcoin from a bank account whose ownership corresponds to the user and coincides with the registered in Banexcoin (must be the same person). Also, Partial or total withdrawals will be completed only When there is an instruction on the part of the user, and the balances involved will be transferred, without exception to accounts whose ownership corresponds to the user.' +
				'In case of detecting operations that could correspond to an activity of Arbitration Banexcoin reserves the right to request additional information and/or documentation The User with respect to the counterparties with which he is operating; Amounts Involved in transactions, etc. or others; May determine the closure of the Banexcoin account.',
			'term_responsabilidad_title' : '9.	Responsibility',
			'term_responsabilidad' : 'Users must demonstrate and guarantee that they are the legitimate owners of the funds and they have allowed using all sums deposited in your Banexcoin account; and that the transactions do not infringe the rights of third parties or applicable laws. The Users shall indemnify Banexcoin for the damage suffered and all the actions of responsibility carried forward against Banexcoin originated in the infringement of rights of third parties and/or applicable laws by the user, authorizing the Platform to immobilize your account balance Banexcoin until the situation is solved. Thus raised, and eventually use those balances to compensate for the damage caused, to Platform criterion. To the extent permitted by law, the Platform, and its owners shall not be Responsible for damages, lost profits, loss of earnings, loss of business, loss of opportunity, loss of data, and direct or indirect losses.<br/>' +
				'The Site cannot be held responsible for any failure in its operation, cessation of the service, tardiness or interruption due to Internet connections, or if for any reason the Site will be out of service at any time and for any period of Time. In cases where our site contains links to other sites and resources provided by third parties, these links are provided only for your information. No, we have control over the contents of those sites and resources, and we do not accept responsibility for them or for the loss and damage that may occur when using them.  In the event of suspicion of the existence of a crime, Banexcoin can report all the Information required, including names, addresses, and any information, to relevant authorities investigating financial crime and/or violations of the law.  The user recognize that their Banexcoin account can be suspended, disabled, blocked, and/or closed at any time, at the request of the competent authorities.  Nothing in these Terms excludes or limits the liability of Users for fraud, death, or damage to persons caused by their negligence, violation of the Terms of Service implied by the laws in force, or any other liability other than Limited or excluded by law.',
			'term_limitacion_responsabilidad_title' : '10.	Limited Liability',
			'term_limitacion_responsabilidad' : 'Users are aware of the nature, origin, and volatility of the cryptocurrencies. In particular, but not limited to this, Users are aware that the cryptocurrencies have not been recognized as legal tender or means of payment by various monetary authorities, that the legal treatment of Bitcoins or other Crypto assets differs in different jurisdictions, and that nothing ensures that in the future this situation changes favorably. The Users also have the knowledge of the mechanisms of generation of cryptocurrencies, and that they do not have the backing of any sovereign monetary authority or tangible securities. Users also their knowledge of the extreme volatility of the Bitcoins and cryptocurrencies in general, and that the Platform has not made any kind of promise or manifestation about the evolution or performance of such assets.' +
				'By virtue of the foregoing, Users fully assume the risk of operating with Bitcoins or any kind of coin (Crypto or Fiat) handled in Banexcoin, releasing any responsibility or consequence 	emanated from it to the Platform, its operators and holders.',
			'term_regulacion_financiera_title' : '11.	Financial Regulation and Self-Regulation',
			'term_regulacion_financiera' : 'Banexcoin and his Platform DO NOT provide financial services or operations related to financial activity or to financial sector entities. Banexcoin and his Platform they are aimed at making it easier for registered Users to buy and sell Crypto assets. The Platform, service, and use of they may not be subject to any financial regulation, as the crypto assets may not be a financial asset, or value, in the country where the User operates.<br/>' +
				'Notwithstanding the foregoing, for the sake of transparency and good functioning of the Platform, Banexcoin has a compliance officer in each of the jurisdictions where it operates, in addition to strict rules of self-regulation.',
			'term_terminacion_title' : '12.	Termination',
			'term_terminacion' : 'These Terms can be terminated without cause on behalf of Banexcoin. Such termination will be effective when being posted on the Site or informed via email to the user. Termination shall not affect the obligations or rights of none of the parties established in the same and that has happened prior the news of completion, nor the transactions and obligations deriving from them and the rights concluded before the termination is effective. Upon notification, the User may request a refund.' +
				'If you wish to terminate your contract with the Site, Users can close there account any time simply notifying to Banexcoin to the following email Notifications@banexcoin.com' +
				'Users accept that the Site may, at its own discretion and without prior notice, unsubscribe the User access to the Site and to his  account, including but not in an exhaustive way to: Limit the Access, suspend or unsubscribe Users service and accounts, prohibit access to the Platform and its content, services and tools, delay or remove content hosted on the Site, and take the technical and legal steps to keep Users Off-Site if they are generating conflict or possible responsibilities infringement of the intellectual property of third parties, or acting at the expense of the legal established in the present document and with any intention of these Terms.  In addition, the Platform may, at its sole discretion, suspend or give down Users and their respective accounts for any reason and at any time, and without having to explain the cause of that decision. They will be Causes of suspension, withdrawal of Users and/or closure of their respective accounts will be taken under the following circumstances:' +
				'<ul class="lista_term">' +
					'<li>1. Attempts to gain unauthorized access to the Platform or the account of another User or provide assistance to others who try to do so.</li>' +
					'<li>2. Affect or attempt to affect the Platform\'s security functionality.</li>' +
					'<li>3. Use of the Platform to carry out illegal activities such as money laundering, terrorism financing, any type of fraud or other criminal activities.</li>' +
					'<li>4. Provide information or false data, or not provide them, when required by the Platform in relation to the User and the transactions carried out through the Platform.</li>' +
					'<li>5. Violation of these Terms.</li>' +
					'<li>6. Non-Payment or fraudulent payment for any Transaction.</li>' +
					'<li>7. Unexpected operational difficulties.</li>' +
					'<li>8. Orders by law enforcement agencies or another agencies Government.</li>' +
				'</ul>' +
				'Also, Banexcoin reserves itself the right to cancel accounts that have been inactive for periods of at least 6 months or more, or to modify or discontinue the Platform. The Users accept that the Platform will not be liable to them or third parties for the suspension of your account or access to the Site.' +
				'In the event that Banexcoin decides to unsubscribe the account, it will notify the User of that decision. The notification will be made to the email box that User has registered to the time to request the opening of the account. In case of such a fact, and in if the User has a balance in his/her favor on the Platform, he/she must notify within than 10 days continuous the account number and bank in order for it to be transferred the corresponding balance, and in case there is no impediment and/or judicial measure available to it. Such data must correspond without exception to an account of their ownership. If the User had bitcoins or any other cryptocurrency authorized on the Platform you must inform the Email: notificaciones@banexcoin.com within 10 continuous days into  a valid and operating wallet of BTC or crypto assets then which has a balance at the time of closing of your Banexcoin account in order to be transferred the balances that had on the Platform to bliss Date.  In the event that the customer does not report the data to the Platform, the balance of the Banexcoin account to bank accounts associated with the Banexcoin account of the User. Even If an account has been suspended for any reason, the User must pay orders that have been due prior to the date of suspension.  Whichever mode you apply for the closing of the Banexcoin account will be deducted the respective charges for the balances to be withdrawn in favor of Banexcoin at the time of the transfer of balances in any type of asset.',
			'term_privacidad_datos_title' : '13.	Data Privacy',
			'term_privacidad_datos' : 'When the User opens a Banexcoin account it must provide personal information. The personal information provided to the Site will not be released or transferred to third parties unless necessary to comply with the laws, regulations in force, the realization of the transactions or verification of identity through specialized companies to carry out this process.<br/>' +
				'The User will read the protection of personal data policy at the end of this document, being the same integral part of the Terms and Conditions that the user accepts when making use of the site.',
			'term_cookies_title' : '14.	Use of Cookies',
			'term_cookies' : 'We Use persistent cookies to support a user experience without Conflict. This Cookie Is kept on the computer after the browser is closed and can be used by the same in subsequent visits to our Site. We also use cookies to better understand how to interact with our Site and services and to improve our services in general. The User will read the Cookies Policy located on the main page of Banexcoin, being the same integral part of the Terms and Conditions that the user accepts when making use of the Site.',
			'term_derechos_propiedad_title' : '15.	Property Rights',
			'term_derechos_propiedad' : 'All the contents of the Site, including, but not limited to: text, names, data, logos, buttons, icons, code, methods, techniques, models, graphics and software Used, are exclusive property of Banexcoin and its affiliates and are protected by patents, copyright, trademarks, and other applicable legal institutes.',
			'term_fuerza_mayor_title' : '16.	Force Majeure',
			'term_fuerza_mayor' : 'Banexcoin  will not be responsible for any delay or failure in the performance of these Terms caused in whole or in part by fire, strike, flood, embargo, labor dispute, delay or failure of any subcontract, act of sabotage, disturbance, war or riots that disrupt the technological activity, operator accident or delay, Internet fails, voluntary or compulsory enforcement of any governmental act, regulation or request, fortuitous case or force majeure, or any act or omission or other cause beyond the control of Banexcoin.<br/>' +
				'In the event of force majeure, the liability of the affected party shall be suspended until the resolution of this event. If a competent judicial authority considers any of the clauses of these Terms inapplicable, the same shall be applied to the maximum allowable extension, and all other forecasts will remain unchanged.',
			'term_clientes_exceptuados_title' : '17.	Customers Exempted from the Banexcoin Platform',
			'term_clientes_exceptuados' : 'Banexcoin taking into account tax issues in each country and in other cases countries that are on a list banned by agencies that compliance require does not accept as customers to:<br/>' +
				'<ul class="lista_term">' +
				'<li>American citizens, regardless of their Current country of residence.</li>' +
				'<li>Citizens of Cuba, Crimea and Sebastopol, Iran, Syria, and North Korea, Thailand, Bolivia, Bangladesh, Ecuador, Morocco, Iceland, India, Vietnam, China, Sweden, Russia, South Korea, Tajikistan, Yeman, Lebanon, Libya, Nigeria, Pakistan, Sudan.</li>' +
				//'<li>Define Other Countries</li>' +
				'</ul>',
			'term_contactanos_title' : '18.	Contact us',
			'term_contactanos' : 'If you have any questions regarding these Terms, your rights and obligations are originate of the same and your use of the Site and the platform, your account or other particular, Please contact: <a href="mailto:notificaciones@banexcoin.com">notificaciones@banexcoin.com</a>',
			'term_politica_proteccion_title' : '19.	Protection of Personal Data Policy',
			'term_politica_proteccion' : '<ul class="lista_term">' +
				'<li>1. Object of the Personal Data Protection policy.' +
				'<p>This Policy (hereinafter "Privacy Policy") is intended to regulate the use within Banexcoin (hereinafter the "Platform") and in relation to third parties of personal data held by the Company. Is understood by data to those relating to a particular natural or legal person or determinable. It is expressly clarified that the company does not collect sensitive data, such as relative to the ethnic origin, beliefs religious affiliations, political affiliation or union membership. The Company collects data with the only in order to fulfill their contractual obligations and labor laws, and tax purposes and to do all the activities that are intended to the fulfillment of the social object, including the activities of Human Resources.' +
				'Once the Company no longer needs to keep its personal data for the purpose with which they were collected or to fulfill legal obligations, commits to remove them from their records and destroy them after a period of 5 years being able to be used in case of investigation being opened or other sensitive events after the closing of the Banexcoin account.</p>' +
				'</li>' +
				'<li>2. Applicable Regulations.' +
				'<p>For the purposes of this Policy, all provisions and definitions of applicable laws and regulations (as a whole "Personal Data Protection Law").</p>' +
				'</li>' +
				'<li>3. Principles of protection of personal data.' +
				'<p>Personal data held by the Platform will be treated in accordance with the provisions of the Personal Data Protection Act. The Platform has registered with the relevant Enforcement Authority as the owner of the database and keeps your records up to date.</p>' +
				'</li>' +
				'<li>4. Security and Confidentiality of personal data.' +
				'<p>The Platform and its subsidiaries undertake to deal with confidentiality personal information you have about your person and take the measures necessary security to protect these data in accordance with the legal provisions.</p>' +
				'</li>' +
				'<li>5. International Transfer of personal data.' +
				'<p>The Platform will only transfer the personal data in its possession to jurisdictions which has an adequate level of protection of personal data, specially the Union European and Commits to sign a contract of international data transfer, following the model contract of International data transfer.' +
				'Although the Platform does not plan to do so, when the personal data under control of the companies to be transferred to jurisdictions that do not have Regulations for the protection of similar or appropriate personal data, the Platform will obtain the express consent of the holders to make it will occur or ensure that there is another legal basis for such International transfer. The data protection rights set forth in this Privacy Policy will continue to be applicable to such data, regardless of the jurisdiction in which they are located.</p>' +
				'</li>' +
				'<li>6. Marketing.' +
				'<p>In principle, the Platform does not collect data to carry out direct marketing actions but it does so with the only object described in point 1 of the present policy. If the Platform were to carry out marketing actions with your personal data, the Platform will force the suppliers of these services to respect your right to request to be removed from the list. The data holder could request to be removed from the distribution list of correspondence at any time and by whatever means.</p>' +
				'</li>' +
				'<li>7. Performance of data processing services on behalf of third parties.' +
				'<p>If the Platform decides to carry out operations outsourcing mean hiring with third parties to provide their data processing services Personnel collected by the Platform, will then force suppliers to Complete compliance with applicable legal provisions.</p>' +
				'</li>' +
				'<li>8. Rights of the data holders.' +
				'<p>The owners of the personal data have the right of access, information, Rectification, updating and deletion of your personal data, which May exercise by contacting the data Protection Officer within the Platform. To do so, they must prove reliably their identity through the display of your Document Only. Also, if a third party requests a Request for access or correction to your personal data, you will be asked to Credit a legitimate interest, whether of kinship in the event of the death of the Holder of the personal data, or the court order justifying the order. The Platform will have within ten (10) continuous days to respond to the application Counted from the date the data holder notifies the Platform In a reliable way. If the data were incorrect the Platform is committed to blocking access to them until the occurrence of the Rectification, or updating of them.' +
				'The exercise of these rights will be free if the same is exercised once Every six months in the same calendar year. In case the owner of the data decided to exercise it more frequently, the Platform may Establish a position that does not exceed US$50 for each request.</p>' +
				'</li>' +
				'<li>9. Data Protection Officer.' +
				'<p>The Company designates the Data Protection Officer, The Data holders for exercising their rights must contact him via email notificaciones@banexcoin.com. Also, any data holder already an employee of the company or third party may contact you to clarify any question you may have regarding this policy, or the content and exercising their rights. The Platform provides both the Data Protection Officer with the necessary training for the fulfillment of this task. The position of Protection Officer of Data is indefinite; however, The Platform reserves the right to change him, at any time and without needing to express cause whatsoever.</p>' +
				'</li>' +
				'<li>10. Incident Notification.' +
				'<p>The Platform informs its employees that if they become aware of a violation of privacy or confidentiality rules should Immediately contact the Data Protection Officer and if they came to Knowledge of a security incident should make it known Immediately to the specialized team according to the Security Document And the Data Protection Officer for the Platform to adopt the Measures of the case. Regardless of this, the Platform will conduct audits to verify compliance with this policy in order to do so does not you will need to notify you beforehand to those employees who have access to the Platform databases.</p>' +
				'</li>' +
				
				'If a breach of the Terms of this policy is found, Disciplinary measures arranged by the current labor laws may be taken.' +

				'If you have any concern, As well as any suggestions regarding our Policies, and your rights and obligations that are detached from them, or any other section of Banexcoin.com please write Us to <a href="mailto:info@banexcoin.com">info@banexcoin.com</a>',
				
				// POLITICAS Cookies
				'plt_cookies_title' : 'Cookie Policy',
				'plt_cookies' : 'At Banexcoin We use cookies to make our website faster and more efficient by allowing you to provide a quality service, this is why we want to provide you more information:<br/><br/>' +
					'<b>What are cookies?</b><br/>' +
					'Cookies are small text files located in the browser directory of your computer or mobile device. When you visit a web site, information is sent to the browser that then creates the cookie. Every time you return to visit the same website this accesses the information stored in the cookie.<br/><br/>' +
					'<b>What are cookies for?</b><br/>' +
					'Cookies are used for several reasons:<br/>' +
					'<ul class="lista_term">' +
						'<li>Help our website to remember your preferences</li>' +
						'<li>Help improve information search functionality</li>' +
						'<li>Help monitor website performance</li>' +
					'</ul>' +
					'Some cookies are essential to allow the Web site to work properly. Banexcoin uses the information collected from cookies to evaluate the effectiveness of our Site, analyze trends and manage the Platform. The information collected from the cookies allows us to determine things like what parts of our Site are the most visited and the difficulties that our visitors can have to access our Site.  Once in a while, we will be testing our website to see how our visitors respond to different design elements.<br/><br/>' +
					'Cookies also allow us to make an analysis of our website. Is of great importance for us to know how many visitors we receive, since where they are visiting us, which are the most popular sections, and what time of day has the most or least number of visitors.',
			// SEGURIDAD
			'plt_seguridad_title' : 'Security',
			'plt_seguridad' : 'In Banexcoin day to day, we make great efforts to ensure that our Users\' accounts are secure. Our Platform has safety features of high level and a proactive approach by fighting malicious actors, in the hand of the Users so that he is well informed of what he must do to keep his assets safe.<br/>' +
				'Our philosophy is that first of all safety is the most important thing when dealing with digital assets. We should always be up to date with the best practices in terms of security and privacy, As security additional measures Banexcoin manages your encrypted email accounts offering you the highest level of security.<br/>' +
				'Banexcoin continuously is reinforcing security measures in its platform environment, increasing procedures with audits and reducing zones of damages that could expose the platform, mitigating in such case Banexcoin is a Digital asset and fiat currency exchange Platform, Users must take into consideration the following instructions which may be in a key factor to ensure their funds in our Platform, therefore we recommend:<br/><br/>' +
				'<ul>' +
					'<li>Enable two-factor authentication: Which ensures that you are the one doing the operation.</li>' +
					'<li>Store your private keys in a safe place: security That we offer you in Banexcoin goes hand to side with the way you handle it. Keep your keys well saved and keep control of your cryptocurrencies from third parties.</li>' +
					'<li>Don\'t Expose yourself: We highly recommend a high level of confidentiality at any time while realizing operations.</li>' +
					'<li>Stay informed and learn how to act: Find information about the options you have and the ones we offer you at Banexcoin so that your assets remain safe, there are many, for further information follow us thru our social network.</li>' +
				'</ul>' +
				'<b>Warning:</b> In case the User decides to install a 2FA application on a device (i.e: phone or tablet), User understands he does it at his own risk. Banexcoin cannot be responsible for the leak or loss of any information or funds, as a consequence of the use of a 2FA application on a device whose operating system has been altered, for example, without limitation, Root (Android) or Jailbreak (iOS).<br/>' +
				'About Phone support<br/>' +
				'Banexcoin doesn\'t offer any phone support. For this reason, Banexcoin doesn\'t have a phone number. If you find a phone number associated with the support Banexcoin online, don\'t call or try to give any information as you may be providing information to malicious people who could act against your safety and funds.<br/>' +
				'Facts of interest when talking about security<br/>' +
				'Due to blockchain technology is innovative  there\'is still a lack of knowledge in terms of how it is handled, that`s why in Banexcoin We want our Users to be informed of how malicious agents act, and also  would like to provide you of a Glossary in order to take the necessary measures in order to avoid being a victim.<br/>' +
				'Sybil Attack: Is a type of threat at a large scale to security in an online system where a person tries to take control of a network of a blockchain creating multiple nodes. While it may think that individually it can´t affect this is one of the most dangerous issues since it can take control of the entire network if very specific conditions are met, in order to avoid this is why  the mining of cryptocurrencies where born, well the miners who contribute to the network are benefited with an incentive maintaining differentiated the blockchain from any other computer system making it highly resistant to a Sybil attack.<br/>' +
				'Cryptojacking: Is the combination of the terms Cryptocurrency and Hijacking and it\'s the unauthorized use of any computer, tablet or a cell phone for cryptocurrencies mining. The attacker Inserts malware on a user\'s device and then uses the processing power of that device.<br/>' +
				'Keylogger: is a tool computer designed by cyber criminals where the information you enter through the keyboard the victim\'s computer is captured and making available to these malicious actors. Attackers usually insert this tool into a user\'s device without this being aware of this and capture sensitive information with her, compromising in this way the account of a user.<br/>' +
				'Phishing: kind of a cyber-attack in which individuals with malicious intentions is presented as a company with a good reputation to deceive the Users and collect your confidential information (usernames, passwords, account numbers) and after to subtract their assets from the different platforms, banks, exchanges, etc., commonly sending emails with formats very similar to those used by real entities with messages that indicate to their victims that they should enter "doing click here" to update your data, validate your password, etc., It is a very common type of attack and we must be very aware of it since it is aimed at a large number of users individually.<br/>' +
				'Ransomware: It\'s a Malicious program that restricts access to certain parts or files of the operating system of the infected device and then asks for a ransom type in exchange for removing this restriction of your compromised files or systems.<br/>' +
				'* Other risks Implications:<br/>' +
				'There are additional risks that we have not foreseen or identified in Banexcoin Terms of use.  The user should always bear in mind that trade in cryptocurrencies is a risky activity from the point of view of their own finances as they probably are susceptible to bubbles or loss of confidence this could be driven by collapse demand in relation to the offer affecting the price of them very notoriously. The trust in cryptocurrencies is subject to variations of the markets which can be directly related to volume and volatility and bid and offers of the participants of such instruments which are also subject to the jurisdictions where they operate, limited or performing under government or legal entities rules where the cryptomarket functions, or due of some government or legal entities where they function, or to unexpected changes implemented by software developers,  or crypto mining machines or others. Trust or confidence could also affect due to problems of technical character. That is why we strongly recommend our users to evaluate their financial situation thoroughly and evaluate the levels of risk they may face at the time of trading (buy or sell) with cryptocurrencies.',

				// Politicas KYC
				'kyc-polities' : 'KYC Policies',
				'kyc-polities-paraf1' : 'In response to the growing concern of the international community on the problem of money laundering and the financing of terrorism, many countries in the world are enacting and strengthening their laws on this subject.',
				'kyc-polities-paraf2' : '<b>BANEXCOIN</b> (Hereinafter "The Company"), <b>incorporated</b> with the sole purpose of carrying out operations and transactions based on foreign currencies and cryptocurrencies through a virtual platform, recognizing the importance of this matter and is committed in the fight against money laundering and the financing of terrorism, since it <b>impacts</b> fundamental aspects of social life in the Republic of Peru and <b>Globally</b>.',
				'kyc-polities-paraf3' : 'The Company understands that the best way to comply with this commitment is to establish effective internal policies and procedures that lead to:',
				'kyc-polities-paraf4' : '<b>1)</b> Carry out the activities and services provided in accordance with the strict ethical standards and regulations of the laws in force.' +
																'<br>' +
																'<b>2)</b> The application of codes of conduct, monitoring and information systems to prevent The Company from being used for money laundering and financing of terrorism.' +
																'<br>' +
																'<b>3)</b> Ensure the strict application of the Due Diligence regime in the client\'s knowledge in its operations.' +
																'<br>' +
																'<b>4)</b> Strict compliance with money laundering and terrorism financing, applicable laws in the Republic of Peru as well as <b>other jurisdictions</b>, as well as the 40 recommendations issued on this subject by the Financial Action Task Force on Money Laundering (FATF) and other <b>international authorities</b>.' +
																'<br>',
				'kyc-polities-paraf5' : 'As a result, The Company (managers and employees) must be alert to any suspicious activity and immediately inform the internal bodies, in accordance with the specific policies and procedures, so that they can, in turn, notify the Financial Intelligence Unit of Peru. - UIF Peru and <b>other regulators worldwide.</b>',
				'kyc-polities-paraf6' : 'Adherence to local policies and to the highest international standards in matters of prevention of money laundering and the financing of terrorism will be fundamental to ensure that The Company can comply with the commitments being signed through these policies that are part of the internal manual procedures in the Same title of The Company.',
				'kyc-polities-paraf7' : 'Failure to comply with the criteria and guidelines contained in this manual will result in the corresponding responsibilities <b>by</b> penalties of <b>law</b>.',

				// Politicas de Privacidad
				'privacidad-politicas' : 'Security Policies',
				'plt_privacidadv2' :  '<h3>1. Object of the Personal Data Protection policy</h3>' +
									'<p>This Policy (hereinafter "Privacy Policy") is intended to regulate the use within Banexcoin (hereinafter the "Platform") and in relation to third parties of personal data held by the Platform. It is understood by data to those relating to a particular natural or legal person or determinable. It is expressly clarified that the Platform does not collect sensitive data, such as relative to the ethnic origin, beliefs religious affiliations, political affiliation or union membership. The Platform collects data with the only purpose to fulfill their contractual obligations and labour laws, and tax purposes and to do all the activities that are intended to the fulfillment of the social object, including the activities of Human Resources.</p>' +
									'<p>Once the Platform no longer needs to keep its personal data for the purpose with which they were collected or to fulfill legal obligations, it commits to remove them from their records and destroy them after a period of 5 years being able to be used in case of investigation open or other sensitive events after the closing of the Banexcoin Account.</p>' +
									'<h3>2. Applicable Regulations</h3>' +
									'<p>For the purposes of this Policy, all provisions and definitions of applicable laws and regulations (as a whole "Personal Data Protection Law").</p>' +
									'<h3>3. Principles of protection of personal data</h3>' +
									'<p>Personal data held by the Platform will be treated in accordance with the provisions of the Personal Data Protection Act. The Platform has registered with the relevant Enforcement Authority as the owner of the database and keeps your records up to date.</p>' +
									'<h3>4. Security and Confidentiality of personal data</h3>' +
									'<p>The Platform and its subsidiaries undertake to deal with confidentiality personal information you have about your person and take the measures necessary security to protect these data in accordance with the legal provisions.</p>' +
									'<h3>5. International Transfer of personal data</h3>' +
									'<p>The Platform will only transfer the personal data in its possession to jurisdictions which has an adequate level of protection of personal data, specially the Union European and Commits to sign a contract of international data transfer, following the model contract of International data transfer.</p>' +
									'<p>Although the Platform does not plan to do so, when the personal data under control of the companies to be transferred to jurisdictions that do not have Regulations for the protection of similar or appropriate personal data, the Platform will obtain the express consent of the holders to make it will occur or ensure that there is another legal basis for such International transfer. The data protection rights set forth in this Privacy Policy will continue to be applicable to such data, regardless of the jurisdiction in which they are located.</p>' +
									'<h3>6. Marketing</h3>' +
									'<p>In principle, the Platform does not collect data to carry out direct marketing actions but it does so with the only object described in point 1 of the present policy. If the Platform were to carry out marketing actions with your personal data, the Platform will force the suppliers of these services to respect your right to request to be removed from the list. The data holder could request to be removed from the distribution list of correspondence at any time and by whatever means.</p>' +
									'<h3>7. Performance of data processing services on behalf of third parties</h3>' +
									'<p>If the Platform decides to carry out operations outsourcing mean hiring with third parties to provide their data processing services Personnel collected by the Platform, will then force suppliers to Complete compliance with applicable legal provisions.</p>' +
									'<h3>8. Rights of the data holders</h3>' +
									'<p>The owners of the personal data have the right of access, information, rectification, updating and delete of your personal data, which may exercise by contacting the data Protection Officer within the Platform. To do so, they must prove reliably their identity through the exhibit of your Personal Identification. Also, if a third party request for access or correction to your personal data, you will be asked to credit a legitimate interest, whether of kinship in the event of the death of the holder of the personal data, or the court order justifying the order. The Platform will have within ten (10) continuous days to respond to the application counted from the date the data holder notifies the Platform In a reliable way. If the data were incorrect the Platform is committed to block the access to them until the occurrence of the rectification, or its update.</p>' +
									'<p>The exercise of these rights will be free if the same is executed once Every six months in the same calendar year. In case the owner of the data decided to exercise it more frequently, the Platform may Establish a position that does not exceed US$50 for each request.</p>' +
									'<h3>9. Data Protection Officer</h3>' +
									'<p>The Company designates the Data Protection Officer, The Data holders for exercising their rights must contact via email to <a href="mailto:notificaciones@banexcoin.com"></a>. Also, any data holder already an employee of the company or third party may contact you to clarify any question you may have regarding this policy, or the content and exercising their rights. The Platform provides both the Data Protection Officer with the necessary training for the fulfillment of this task. The position of Protection Officer of Data is indefinite; however, The Platform reserves the right to change him, at any time and without needing to express cause whatsoever.</p>' +
									'<h3>10. Incident Notification</h3>' +
									'<p>The Platform informs its employees that if they become aware of a violation of privacy or confidentiality rules should Immediately contact the Data Protection Officer and if they came to Knowledge of a security incident should make it known Immediately to the specialized team according to the Security Document and the Data Protection Officer for the Platform to adopt the measures of the case. Regardless of this, the Platform will conduct audits to verify compliance with this policy in order to do so you will not need to notify beforehand to those employees who have access to the Platform database.</p>' +
									'<p>If a breach of the Terms of this policy is found, disciplinary measures arranged by the current labour laws may be taken.</p>' +
									'<p>If you have any concern, As well as any suggestions regarding our Policies, and your rights and obligations that are detached from them, or any other section of Banexcoin.com please write Us to <a href="mailto:info@Banexcoin.com"></a></p>',

				'plt_privacidad' :  '<p>For the security of the User, it is necessary that he uses some method of authentication of multiple factors (at least two forms of authentication) this to access his Banexcoin Account and perform operations on the Platform. Banexcoin will in no case be responsible for the use given of the forms of authentication by the User or by any third party. The User guarantees that he / she has taken the respective security practices when accessing the Platform, Banexcoin is not responsible for the User being a victim of Phishing, neglects their access keys, provides them to third parties or any other type of negligence as part of the User, nor shall he be liable, in any case, for acts of third parties that affect the Internet connection, the Banexcoin computer platform or the acts or form of authentication chosen by the User, or any similar acts or acts, of which the User releases Banexcoin, waiving any right that may correspond to it for this concept. Banexcoin reserves the right, in any case and without any communication or explanation, to prohibit access to its website to any person and / or device.</p>' +
									'<p>Banexcoin requires among the forms of authentication of multiple factors, in addition to their credentials or passwords of code access delivered through the cellular text messaging service (SMS) or some two-factor authentication (2FA) with the support of some application, for which Banexcoin suggests the download of Google Authenticator (downloadable on Android or iOS), but without having any responsibility for the proper functioning of this application and in the event that the user decides to install it on a device (for example, phone or tablet), it does so at its own risk and responsibility. Banexcoin cannot be responsible for the flight or loss of funds or information, as a result of the use of a 2FA application on a device whose operating system has been altered by Jailbreak (iOS) or Root (Android).</p>' +
									'<p>At all times it is the responsibility of the User to maintain the integrity of their personal data and information safeguarded, not to share or provide their identification data to third parties, as well as to make sure that when using the Platform, they enter their data or credentials in the secure address https://www.banexcoin.com/. The official site of Banexcoin has an EV SSL certificate which allows the user to be assured that he is in the right place, the certificate can be seen as a green box in the upper left corner of his browser, with a small padlock and the legend Banexcoin S.A. Therefore, access to the official site of Banexcoin is the responsibility of the User, without Banexcoin being responsible for, or can assure, that the site is safe. It is recommended that the User keep passwords of multi-factor authentication methods confidential and in different locations. The User also accepts that it is their responsibility to maintain the due confidentiality of their credentials, passwords and authentication means. Banexcoin cannot be responsible for the leak or loss of information or funds derived from a lack or any error in the confidentiality of the User or any other act or fact, of any nature, attributable to the User.</p>' +
									'<p>In the case of loss of the credentials of access to the Platform by the User, the process of retrieving the User code or password will only be made through the steps that Banexcoin has designated for it, taking into account the highest security standards. This process may only be initiated by the User and never by Banexcoin. Banexcoin will never ask any User, under any circumstance and by any means (mail, email, social networks, telephone, SMS, etc.) to reveal the credentials used to access their Banexcoin account. The User will not provide their access credentials to the Platform to another person under any circumstances. Banexcoin, however, may have access to the User in the cases and circumstances provided in these Terms.</p>' +
									'<p>Banexcoin understands as valid all the transactions that you make in User after you have logged in to your account, stating but not limiting, for example, buying or selling positions, transfers or any use of the services provided in the Platform. Through these Terms, the User accepts that he is responsible for his actions concerning the Platform and is bound, without any responsibility for Banexcoin with the acquired obligations of payment or delivery or the charges or losses that may arise as a consequence of, or in connection with, a posture or transfer made in the Platform through your Banexcoin Account through the use of login credentials, as well as the authentication processes that may be associated. Only by accessing the Banexcoin site and ordering or concluding any operation in terms thereof (even if a third party makes inappropriate use of the Platform on behalf of the User), the User is forced to respond to the obligations that they are attributable or incurred, referring to these Terms. The User will assume through patrimonial and pecuniary responsibility for any of his obligations related to these Terms.</p>' +
									'<p>It is the User\'s responsibility to notify Banexcoin if they believe or suspect at any time that their account or their credentials may have been compromised, or if a third party is acting on their own with or without their authorization, for which they must notify the email notificaciones@banexcoin.com In addition, the User undertakes to take all necessary measures or supply the requested information requested by Banexcoin in relation to any of the aforementioned actions.</p>' +
									'<h2>Other risks Implications</h2>' +
									'<p>There are additional risks that we have not foreseen or identified in Banexcoin Terms of use.  The user should always bear in mind that trade in cryptocurrencies is a risky activity from the point of view of their own finances as they probably are susceptible to bubbles or loss of confidence this could be driven by collapse demand in relation to the offer affecting the price of them very notoriously. The trust in cryptocurrencies is subject to variations of the markets which can be directly related to volume and volatility and bid and offers of the participants of such instruments which are also subject to the jurisdictions where they operate, limited or performing under government or legal entities rules where the crypto market functions, or due of some government or legal entities where they function, or to unexpected changes implemented by software developers,  or crypto mining machines or others. Trust or confidence could also affect due to problems of technical character. That is why we strongly recommend our users to evaluate their financial situation thoroughly and evaluate the levels of risk they may face at the time of trading (buy or sell) with crypto assets.</p>',


				// ACERCA DE BANEXCOIN
				'acerca_platform_title' : 'About Banexcoin',
				'acerca_platform_descp' : '<p>In Banexcoin we bet for the success of all, this digital era has experienced advances at a rapid pace with the arrival of Blockchain and with this the cryptocurrencies, that is why in Banexcoin we offer you the tools to enter this new era easily and fast, we offer you the most secure, reliable digital platform, with an interface to exchange your digital assets and fiat money with the tools you need and many more with which you can interact to have your own lifestyle.</p>' + 
				'<p>We continue to grow at all times through the continuous development of our systems to adapt to the changes that may occur in the crypto ecosystem, we want with all this to give you the peace that you need to know that your funds are in good hands, we have complete levels of customer verification to ensure that bad actors do not use our services, with fiat and/or crypto funds from illegal operations, we have the support of companies specialized in:</p>' +
				'<ul class="lista_term">' +
				'<li>1. Anti-Money Laundering (AML)</li>' +
				'<li>2. Know Your Customer (KYC)</li>' +
				'<li>3. Identify people linked to human trafficking and terrorist activities</li>' +
				'<li>4. Auditing of our systems</li>' +
				'<li>5. Laws applicable to our services, for example, Data Protection and Data Laws</li>' +
				'<li>6. Others</li>' +
				'</ul>' +
				'<p>We are on continuous development and providing our services in more countries of America to contribute to the adoption and educate about the benefits of digital assets.</p>' +
				'<p>The Experience of exchanging with your currency and the freedom to choose your favorite crypto, all this and more in BANEXCOIN.</p>',


				/* Niveles Banexcoin */
				'level' : 'Level',
				'lvls-beneficios' : 'Benefits',
				'lvls-limites' : 'Limits*',
				'lvls-depositos' : 'Deposits',
				'lvls-diario' : 'Daily',
				'lvls-mensual' : 'Monthly',
				'lvls-anual' : 'Yearly',
				'lvls-ilimitado' : 'Unlimited',
				'lvls-retiros' : 'Withdrawals',
				'lvls-requerimientos' : 'Requirements',
				'lvls-foot1' : '<b>*</b> OTC operations may request a verification process face to face to complete at satisfaction.',
				'lvls-foot2' : '<b>**</b> For double checking and validation',
				'lvls-foot3' : 'The limits shown here are expressed in US $ for Fiat and for cryptocurrencies in their equivalent price in US $ at the time of the transaction, they are a reference price subject to change at any time and due to the nature of our activities we want to make clear that we are subject to condition and fluctuation of markets (volatility, volume, liquidity, others) as well as different regulations in any jurisdictions where Banexcoin operates.',
				'lvls-foot4' : '<b>Warning</b> The products and services described here may not be available in all jurisdictions and for all citizens. No information set forth above constitutes any advice, or advertisement, or invitation, or offer or an application form to buy or sell any cryptocurrencies. Trading with digital assets is under your responsibility only after having recognized and accepted the implicit risks.',
				/* Level 1 */
				'l1-title' : 'Initial',
				'l1-name' : 'Level 1',
				'l1-descript' : 'For beginners starting at the universe of the Crypto',
				'l1-lister-beneficios' : '' +
					'<li class="iok"><i class="fas fa-check"></i> Deposits in Crypto and Fiat </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Buy Crypto using your Credit Card </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Fiat Withdrawals </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Buy / Sell / Trade with Crypto </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Limits for Deposits or Withdrawals </li>',
				'l1-lister-requerimientos' : '' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Fullname </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Date of Birth </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Main Address (no PO Box) </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Email </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Phone number </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> An ID issued by a Government </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Specify if you are PEP </li>',
				/* Level 2 */
				'l2-title' : 'Intermediate',
				'l2-name' : 'Level 2',
				'l2-descript' : 'For those who have a certain level of knowledge and handling Crypto',
				'l2-lister-beneficios' : '' +
					'<li class="iok"><i class="fas fa-check"></i> Deposits in Crypto and Fiat </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Buy Crypto using your Credit Card </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Fiat Withdrawals </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Buy / Sell / Trade with Crypto </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Limits for Deposits or Withdrawals </li>',
				'l2-lister-requerimientos' : '' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Fullname </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Date of Birth </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Main Address (no PO Box) </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Email </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Phone number </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> An ID issued by a Government </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Specify if you are PEP </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Billing Address </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Proof of Residence (no older than 3 months) </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Identity Confirmation Photo </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Occupation </li>',
				/* Level 3 */
				'l3-title' : 'Master',
				'l3-name' : 'Level 3',
				'l3-descript' : 'For Experts who have extensive knowledge in Crypto',
				'l3-lister-beneficios' : '' +
					'<li class="iok"><i class="fas fa-check"></i> Deposits in Crypto and Fiat </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Buy Crypto using your Credit Card </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Fiat Withdrawals </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Buy / Sell / Trade with Crypto </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Limits for Deposits or Withdrawals </li>' +
					'<li class="iok"><i class="fas fa-check"></i> OTC Service & Operations* </li>',
				'l3-lister-requerimientos' : '' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Fullname </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Date of Birth </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Main Address (no PO Box) </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Email </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Phone number </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> An ID issued by a Government </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Specify if you are PEP </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Billing Address </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Proof of Residence (no older than 3 months) </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Identity Confirmation Photo </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Occupation </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> AML Verification </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Financial Statements </li>',
				/* Level 4 */
				'l4-title' : 'Corporate',
				'l4-name' : 'Level 4',
				'l4-descript' : 'Exclusive level for Entities & Corpotations',
				'l4-lister-beneficios' : '' +
					'<li class="iok"><i class="fas fa-check"></i> Deposits in Crypto and Fiat </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Buy Crypto using your Credit Card </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Fiat Withdrawals </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Buy / Sell / Trade with Crypto </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Special limits for Deposits or Withdrawals by account (previous analysis) </li>' +
					'<li class="iok"><i class="fas fa-check"></i> OTC Service & Operations* </li>',
				'l4-lister-requerimientos-desc1' : 'Send an email to:<br><a href="mailto:corporate.accounts@banexcoin.com">corporate.accounts@banexcoin.com</a><br>Detailing the following:',
				'l4-lister-requerimientos-desc2' : 'And an executive will contact you**',
				'l4-lister-requerimientos' : '' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Name of the company </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Contact names </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Phone number </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Country of incorporation </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Certified Public Registry in good standing </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Copy of the Incorporation of the Company </li>',

			'tarifas_comisiones' : 'Fee and Tariffs',
			'best_rates_com' : 'Here at Banexcoin we work with the best rates and commissions.',
			'confirm' : 'Confirmations',
			'tarifas_comisiones_prr1' : 'In Banexcoin we have many ways to increase the balance of your account. Once you have sufficient funds, you may use your balance to exchange your crypto assets or fiat currency that we manage in our platform. Also, we count with a flat rate for all exchange operations, where you will be able to see a mínimum percentage before performing any way of exchanging such currencies, depending only on the level of verification of the user.',
			'tarifas_comisiones_prr2' : 'Besides you can deposit your Crypto assets without paying any fee. For security matters and in order to avoid double spending risks, we have established a certain number of confirmations, subject to the type of cryptocurrency. These confirmations mean the insertion of the transaction of a block incorporated into the blockchain by the miners. Each subsequent block increases an additional confirmation for such transaction. In example, in the BTC Blockchain the average time to mine for each block is 10 minutes, so Banexcoin requires six (06) confirmations, so any user can see in his account credited there bitcoins in a lapse of sixty (60) minutes approximately, as long as the miners take ten minutes to mine a block. It may occur from time to time that it could last more, and that is when we call it congestion in the network, in such case it is out of the Platform control, therefore it is exempt from any liability regarding extemporary execution timing in such matter.',
			'tarifas_comisiones_tiempos' : 'Times and Commissions for Deposits and Withdrawals',
			'tarifas_app_peru' : 'Fees Apply for Peru <img src="local/landing-page/images/country/peru.png"/>',
			'tarifas_app_panama' : 'Fees Apply for Panamá <img src="local/landing-page/images/country/panama.png"/>',
			'fiat_depo' : 'Fiat Deposits',
			'estimate_time' : 'Estimated time for Deposit*',
			'minimun_amount' : 'Minimum Amount',
			'perc_com_depo' : 'Commission fee for Deposits',
			'inmediate' : 'Immediate',
			'no_cost' : 'free',
			'tarjeta_Credito' : 'Credit Card **',
			'trans_nac_same' : 'National Transfer from the same Bank',
			'trans_nac_other' : 'Transferencia Nacional desde el otro Banco',
			'one_work_day' : '1 labour day',
			'trans_inter' : 'International wire transfer***',
			'depo_cript' : 'Cryptocurrencies Deposits',
			'reti_cript' : 'Cryptocurrencies Withdrawals',
			'reti_fiat' : 'Fiat Withdrawals',
			'number_conf_depo' : '# Confirmation for Deposits',
			'number_conf_reti' : '# Confirmation for Withdrawals',
			'estimate_time_reti' : 'Estimated time for Withdrawals*',
			'perc_com_reti' : 'Commission for Withdrawals',
			'com_buy_sell' : 'Cryptocurrencies Buy / Sell (trading) Commission Fee',
			'level_ini1' : 'Initial - Level 1',
			'level_int2' : 'Intermediate - Level 2',
			'level_ma3' : 'Master - Level 3',
			'level_corp4' : 'Corporate - Level 4',
			'tarifas_clause1' : '* It shows the estimated time of confirmation, due to execution time may vary upon  web conditions- You must take in to account that estimated time of waiting is related to the time awaited till availability of the funds at your Banexcoin account which involves that transaction should be confirmed in the first block after the same has been sent. If your transaction wasn\'t confirmed in the first block possible, then the transaction could take more time then expected relying on the conditions of the web at that moment.',
			'tarifas_clause2' : '** Credit Cards Visa and Mastercard will be the only ones accepted. The owner must be the same as the user in the Banexcoin account who is requesting the deposit of the funds.',
			'tarifas_clause3' : '*** This transaction must be done by the user of the Banexcoin Account and he must previously assume the charges made by the bank for the execution of the transfer and under no circumstances may be transferred to Banexcoin, which the funds will be destinated to if this doesn’t occur transaction will be returned deducting any associated charges.',
			'tarifas_clause4' : 'The times of transference for deposit or withdrawal of fiat currency are estimated and will be counted during labor days, it will depend on the processing time of the banking network.',
			'tarifas_clause5' : 'The Commission Fees above mentioned are subject to changes without previous notice.',

			'table_name' : 'NAME',
			'table_market_cap' : 'MARKET CAP',
			'table_last_price' : 'LAST PRICE',
			'table_volumen' : 'VOLUME (24H)',
			'table_coins' : 'COINS IN CIRCULATION',
			'table_total_coins' : 'TOTAL COINS',
			'table_change' : 'CHANGE (24H)',

			/* NEW LANDING */
			'get_cripto_title' : 'Get cryptocurrencies <br> in your local currency and grow your income',
			'be_part_subtitle' : 'Be part of the digital economy with a fast,<br> secure and reliable platform',
			'start_to_win' : 'START TO WIN MORE',
			'buy_sell_sub' : 'Buy and sell cryptocurrencies of your choice',
			'make_analisis_sub' : 'Perform effective analyzes with real-time indicators',
			'change_usd_sub' : 'Change USD or PEN at the best rate and quickly and safely',
			'why_cripto_title' : 'Why invest in cryptocurrencies?',
			'did_you_know' : 'Did you know that if you had invested <strong>$10</strong> in cryptocurrencies in 2011 <br> today you would have the impressive amount of <strong>$364,208,057?</strong>',
			'secure_transactions_sub' : 'Secure and transparent transactions',
			'fast_pays' : 'Fast payments<br> from <b>anywhere in the world</b>',
			'low_rates' : 'Low <b>or no commissions</b>',
			'not_dependency' : 'It does not depend <b>on the economy of any country</b>',
			'private_identity' : '<b> Transfer easily<br> </b> and safely',

			'meet_banexcoin' : 'Meet Banexcoin',
			'meet_banexcoin_sub' : 'The digital platform for the exchange of cryptocurrencies and fiat money that gives way to your financial independence',
			'free_signup' : 'Free signup',
			'easy_ux' : 'Easy to use interface',
			'real_time_kyc' : 'Real time User verification',
			'24h_support' : '24/07 support and personalized attention',
			'low_rates_depo' : 'Deposits without commission for cryptocurrencies',
			'tranfers_card' : 'Transfers from bank account, credit cards or cryptocurrencies',
			'fast_withdrawal' : 'Withdrawals of physical money in record time',

			'we_have_good_friends' : 'We have good friends',
			'ap_desc' : 'Leading technology company <br>Blockchain',
			'digital_especialist' : 'Specialists in digital identities worldwide',
			'antimoney_laundry' : 'Movement monitoring <br>for digital assets',

			'easy_start' : 'Getting started is very easy',
			'signup_and_confirm' : 'Register and verify your email',
			'enter_valid_info' : 'Enter and validate your identification',
			'deposit_funds' : 'Deposit your funds',
			'ready_to_exchange' : 'Ready! Start exchanging',

			'be_good_hands' : 'You will be in good hands',
			'standard_security' : 'In Banexcoin we have the best standards of security, reliability and we have the support of the best',
			'autorized_sbs' : '*To give you the peace of mind you deserve, we are also registered in the SBS as a Currency Exchange house - <b>Resolution</b> SBS N° <b>03004-2019</b>.',
			'tousands_people' : 'Thousands of people are already part of the digital economy, don\'t be left behind.',

			'copyright_banexcoin' : 'Copyright © 2019 Banexcoin. All rights reserved',
			'use_allow_terms' : 'By using this website you are accepting the <a href="/terminos-condiciones.html">Terms and Conditions</a>, and <a href="/politica-privacidad.html">Privacy</a> and <a href="/politica-cookies.html">Cookies Policies</a>',
					
		},
		'es' : {
			'langactual' : '<img src="/local/landing-page/images/country/espana.png" width="20px"/>    &#9660;',
			'welcome' : 'Bienvenidos a Banexcoin',
			'p_welcome' : 'Intercambia tus Activos Digitales en la Cripto Plataforma mas segura de las Américas.',
			'inicio' : 'Inicio',
			'login' : 'Iniciar sesión',
			'signup' : '¡Regístrate!',
			'signup_top' : 'Regístrate',
			'features' : 'Caracteristicas',
			'more_features' : 'Más caracteristicas',
			'about' : 'Acerca',
			'we' : 'Nosotros',
			'contact' : 'Contacto',
			'user_friendly' : 'Amigable en multiples dispositivos',
			'user_friendly_desc' : 'Ofrecemos una experiencia única de intercambio para todos nuestros usuarios,<br/> a través de una plataforma segura, confiable y que funciona también en dispositivos móviles para que puedas realizar tus transacciones de forma rápida, fácil y segura donde sea que te encuentres.<br/><br/>',
			
			'steps_to_follow' : 'Pasos a seguir',
			'get_registered' : '¡Regístrate!',
			'get_registered_desc' : 'La plataforma te guiará a través del proceso de registro que dura solo unos minutos, ingresa tus datos personales en nuestra plataforma y en instantes tendrás lista tu Cuenta Banexcoin.',
			'get_verified' : '¡Verifícate!',
			'get_verified_desc' : 'En Banexcoin siempre pensando en tu seguridad contamos con 3 niveles de verificación,  consigna la información que te solicitaremos y lleva tus intercambios a otro nivel.',
			'deposit_your_funds' : '¡Deposita tus fondos!',
			'deposit_your_funds_desc' : 'Agrega fondos a tu cuenta Banexcoin ya sea con dinero fiat, transfiriendo desde tu propia cuenta bancaria, tu tarjeta de crédito o también cualquiera de las criptomonedas que manejamos.',
			'exchange' : '¡Comienza a intercambiar!',
			'exchange_desc' : '¡Todo Listo! ya puedes comenzar a comprar y vender con los fondos de tu Cuenta Banexcoin los activos digitales de tu preferencia de forma rápida y segura.',
			

			// MONEDAS
			'monedas' : 'Monedas',
			'key_features' : 'Características',

			// FEATURES 
			'intercambio_tiempo_real' : 'Intercambio en tiempo real',
			'principales_criptos' : 'Usa las principales criptomonedas del momento',
			'informacion_segura' : 'Tu información siempre esta segura',
			'conectate_cualquier_parte' : 'Conéctate desde cualquier parte',
			
			'our_allies' : 'Nuestros aliados',
			'last_news' : 'Últimas noticias',

			/* MENU LINKS */
				// us
				'foot_about_us' : 'NOSOTROS',
				'foot_features' : 'CARACTERISTICAS',
				'foot_blog' : 'Blog',
				'foot_fees' : 'TARIFAS Y COMISIONES',
				'foot_currencies' : 'MONEDAS',
				'foot_levels' : 'NIVELES DE CLIENTES',
				'niveles-clientes' : 'Niveles de Clientes',
				'niveles-clientes-parr' : 'En Banexcoin manejamos diferentes niveles que dan cabida para todos nuestros clientes.',
					// support
				'foot_support' : 'SOPORTE',
				'foot_api' : 'API',
				'foot_security' : 'SEGURIDAD',
				'foot_support_center' : 'CENTRO DE SOPORTE',
					// policies
				'foot_policies' : 'POLITICAS',
				'foot_kyc' : 'POLITICAS DE KYC',
				'foot_aml' : 'POLITICAS DE AML',
					// sub footer
				'foot_term_cond' : 'Terminos y condiciones',
				'foot_privacy' : 'Politicas de privacidad',
				'foot_cookies' : 'Politicas de Cookies',

			// TERMINOS Y CONDICIONES
			'key_terminos_condiciones' : 'Terminos y condiciones',
			'term_last_updated':'Última Actualización: martes, 13 de agosto de 2019, Hora 10:38 AM (GMT-5)',
			'term_descripcion_title' : '1. Descripción',
			'term_descripcion' : 'Estos términos y condiciones de uso (los “Términos”) establecen las condiciones bajo las cuales opera Banexcoin S.A. de aquí en adelante “Banexcoin”, https://www.banexcoin.com/, el “Sitio” o la “Plataforma”. El Usuario deberá leer los Términos cuidadosamente y no hacer uso de la Plataforma a menos que acepte los mismos. El uso continuado de este sitio web implica la aceptación que usted está de acuerdo con los siguientes Términos, independientemente de que exista algún medio de aceptación (incluyendo cualquier click). Si estos Términos no le resultan aceptables, usted debe suspender el uso de Banexcoin, dejar de acceder a nuestro sitio Web y de usar cualquier servicio prestado por nuestra Plataforma o cualquiera de sus subsidiarias y afiliadas; si no suspende dicho uso, usted seguirá obligado conforme a estos Términos.' +
				'La Plataforma permite a sus Usuarios comprar y vender los Activos Digitales y Monedas Fiat aceptadas por el Exchange a través de un mandato otorgado a Banexcoin para tal fin. También permite a los Usuarios registrados en la Plataforma (“Usuarios”) la transferencia de Criptoactivos autorizados en Banexcoin y utilizar los mismos para pagar productos y servicios. Dependiendo del país de residencia, los Usuarios pueden no tener acceso a todas las funcionalidades de la Plataforma. Es responsabilidad de cada Usuario garantizar la viabilidad de la realización de transacciones en criptomonedas en su jurisdicción.' +
				'Al crear una cuenta para utilizar la Plataforma (“Cuenta Banexcoin”) los Usuarios aceptan y garantizan:' +
				'<ul class="lista_term">' +
					'<li><b>a)</b>	Que han leído y aceptado estos Términos.</li>' +
					'<li><b>b)</b>	Que poseen la capacidad legal completa de aceptar estos Términos y de realizar transacciones y transferencias en la Plataforma.</li>' +
					'<li><b>c)</b>	Que autorizan expresamente a Banexcoin a que los datos personales que puedan ser manejados además de Banexcoin por compañías que prestan Servicios de verificación de identidad y reputación, etc. como lo establecen los presentes términos y condiciones, así como las Políticas de AML y Políticas de KYC de Banexcoin.</li>' +
					'<li><b>d)</b>	Que proveerán información fidedigna, real, completa y actualizada a Banexcoin acerca de su personería.</li>' +
					'<li><b>e)</b>	Que el Usuario entiende los términos Activo Digital, Criptomoneda o Criptoactivo los cuales pueden ser utilizados para describir distintas clases de Divisas Digitales mencionadas en estos Términos y que se encuentren listadas en los libros de órdenes de Banexcoin.</li>' +
					'<li><b>f)</b>	Que tienen conocimiento acerca de la naturaleza, situación legal y volatilidad del valor de las criptomonedas y del Bitcoin en particular, y que asumen en forma completa el riesgo implícito en realizar transacciones con dichos activos digitales.</li>' +
					'<li><b>g)</b>	Que podría(n) aprobarse normativa(s) que prohíba(n) y/o restrinja(n) la realización de transacciones con criptomonedas en su jurisdicción de residencia, pudiendo afectar parcial o totalmente la forma en las que se realizan las mismas.</li>' +
					'<li><b>h)</b>	Que son responsables de determinar si una Transacción específica es apropiada para ellos, basándose en sus metas personales, estado financiero y voluntad de tomar riesgos.</li>' +
					'<li><b>i)</b>	Que son responsables de determinar si una transacción específica es apropiada para ellos, basándose en la documentación presentada a Banexcoin y que guarda relación con su situación personal; patrimonial, económica y fiscal.</li>' +
					'<li><b>j)</b>	Que Banexcoin podrá requerir mayor información y/o documentación en caso de considerarlo necesario, comprometiéndose el Usuario a suministrar la misma en los plazos que Banexcoin establezca.</li>' +
					'<li><b>k)</b>	Banexcoin se reserva el derecho, a su completa discreción, de modificar estos Términos en cualquier momento. Su continuidad en el uso de la Plataforma tras notificarle los cambios significará plena aceptación a los mismos. Cada Usuario acepta que todas las transacciones subsecuentes que haga estarán sujetas a la versión entonces vigente de los expresados Términos.</li>' +
					'<li><b>l)</b>	En ningún caso el Usuario podrá hacer uso de los servicios que presta Banexcoin a menos que haya aceptado, o que se considere que ha aceptado (mediante su acceso a la página Web y el uso de los servicios) estos Términos. Lo más probable es que haya hecho clic o va a hacer clic en un botón que contiene las palabras "Regístrate", “Registrarse” o una sintaxis similar. Usted debe entender claramente que esto tiene el mismo efecto jurídico que si usted pone su firma física en cualquier contrato o acuerdo de voluntades. Mediante el uso de cualquier parte de nuestro sitio Web o de los Servicios, incluyendo la Plataforma, el Usuario entiende y acepta que su uso expresa su consentimiento y voluntad propia e incondicional a estos Términos.</li>' +
				'</ul>',
			'term_definicion_title' : '2. Definiciones',
			'term_definicion' : '<b>Altcoin:</b> Construcción simplificada de las palabras “alternative” y “coin”. Podría traducirse como “moneda alternativa”. El término Altcoin se refiere a criptomonedas que derivan del código fuente de Bitcoin u otras criptomonedas conocidas que, en algunos casos, son “forks” de Bitcoin.<br/>' +
					'<b>ATH:</b> Acrónimo de All Time High. Máximo histórico de un precio.<br/>' +
					'<b>Bear Market o Bearish (Oso):</b> Expectativa de disminución de precios en un mercado.<br/>' +
					'<b>Bitcoin / Bitcoin (BTC):</b> Generalmente se usa Bitcoin para referirse a la red o al protocolo, y bitcoin (en minúscula) para referirse a las unidades monetarias. Bitcoin se caracteriza por ser descentralizado, no está respaldado por ningún gobierno o banco central, se sustenta en la tecnología blockchain y en su comunidad de código abierto.<br/>' +
					'<b>Bitcoin Cash (BCH):</b> Criptomoneda que surge el 1 de agosto de 2017 a consecuencia de la división de la comunidad Bitcoin en torno al debate sobre la escalabilidad. A partir del bloque 478.558 se crea la nueva moneda que adopta el nombre de Bitcoin Cash. A partir de este hard fork de la cadena de Bitcoin, en la nueva cadena se empezaron a crear bloques de 8 Mb de tamaño en vez de los 1Mb de Bitcoin.<br/>' +
					'<b>Blockchain (cadena de bloques):</b> Base de datos transaccional distribuida, formada por cadenas de bloques diseñadas para evitar su modificación una vez que un dato ha sido publicado. Esto se logra mediante redes peer-to-peer (P2P), con consensos generados a través de un algoritmo de prueba de trabajo (PoW) y enlazando los bloques criptográficamente con un sellado de tiempo confiable.<br/>' +
					'<b>Bloque génesis:</b> Hace referencia al primer bloque que compone una cadena de bloques o blockchain. En el caso de Bitcoin, la primera blockchain pública, data del 3 de enero de 2009.<br/>' +
					'<b>Blockchain privada o permisionada (permissioned):</b>  Aquella en la que el proceso de consulta, validación y participación están limitados a unos nodos. Tanto los accesos a los datos de la cadena de bloque como el envío de transacciones para ser incluidas, están limitadas a una lista predefinida de nodos o entidades.<br/>' +
					'<b>Blockchain pública o sin permiso (permissionless):</b> Aquella en la que no hay restricciones ni para leer los datos de la cadena de bloques ni para validar transacciones para que sean incluidas en la cadena de bloques. En ellas es fácil entrar y salir, son transparentes, están construidas para operar en un entorno sin confianza.<br/>' +
					//'<b>Blockchain Tamper Evident:</b> Cadena de bloques en la que cualquier modificación es evidente y visible para toda la red una vez se ha realizado. Lo que significa que una Blockchain Tamper Evident puede ser alterada, aunque dicha alteración será visible para todos los participantes de la red.<br/>' +
					//'<b>Blockchain Tamper Proof (a prueba de manipulación):</b> Cadena de bloques con un nivel de seguridad altísimo dado que no se puede modificar nada (o es altamente improbable que alguien tenga acceso a los recursos necesarios para hacerlo). Por lo que, una Blockchain Tamper Proof como la de Bitcoin, a día de hoy es inmutable.<br/>' +
					'<b>Bull market o Bullish (Toro): </b>Expectativa de incremento de precios en un mercado.<br/>' +
					'<b>Clave pública y privada:</b> Podemos pensar en la clave pública como si fuera el número de una cuenta bancaria y en la clave privada como si fuera el PIN secreto. La clave pública es usada para recibir criptomonedas, y la clave privada es usada para firmar las transacciones para gastar esas criptomonedas. Una clave privada y una clave pública están matemáticamente relacionadas, de hecho, la clave pública deriva de la clave privada.<br/>' +
					'<b>Cold Storage:</b> Mantener la clave privada de una criptomoneda en soporte papel o con un hardware específico (como Trezor o Ledger Nano).<br/>' +
					'<b>Confirmación:</b> Ocurre cuando una transacción de una blockchain ya ha sido procesada por la red. Las transacciones de una blockchain reciben confirmaciones una vez han sido incluidas en un bloque, que a su vez ya ha sido conectado con el siguiente bloque de la cadena. Asegurando así la inmutabilidad de la transacción.<br/>' +
					'<b>Contrato inteligente (Smart contract):</b> Programa informático que corre sobre una blockchain de forma descentralizada. Son aplicaciones que se ejecutan exactamente como se programaron sin posibilidad de tiempo de inactividad, censura, fraude o interferencia de terceros. Funciona como una sentencia if-then (si-entonces) de cualquier otro programa de ordenador con la diferencia de que se realiza para interactuar con activos reales. Cuando se dispara una condición pre programada, no sujeta a ningún tipo de valoración humana, el contrato inteligente ejecuta la cláusula contractual correspondiente. Pueden interactuar con otros contratos, tomar decisiones, almacenar datos y enviar criptomonedas o tokens. Existirán y serán ejecutables mientras exista toda la red, solo desaparecerán si fueron programados para autodestruirse.<br/>' +
					'<b>Criptografía:</b> Técnicas de cifrado o codificado destinadas a alterar las representaciones lingüísticas de ciertos mensajes con el fin de hacerlos ininteligibles a receptores no autorizados. Uno de algoritmos criptográficos recurrentes cuando se estudia el protocolo Bitcoin es SHA-256<br/>' +
					'<b>Criptomoneda:</b> Una criptomoneda (del inglés cryptocurrency) es un medio digital de intercambio que utiliza criptografía para asegurar las transacciones financieras, controlar la creación de unidades adicionales y verificar la transferencia de activos, no tienen curso legal, ni se emiten, ni se encuentran garantizadas por ningún país o jurisdicción. A la fecha el BTC, así como las demás criptomonedas no han sido reconocidas como monedas por diversos bancos centrales/gobiernos; representan un activo de alta volatilidad cuyas fluctuaciones exceden las habituales en activos financieros tradicionales. Algunos ejemplos: Bitcoin (BTC), litecoin (LTC), ether (ETH).<br/>' +
					'<b>Cuenta Banexcoin:</b> Una vez que el Usuario haya aceptado los Términos, provisto a Banexcoin de la información y documentación solicitada para dar cumplimiento a las políticas de la Plataforma y que haya recibido aprobación de la misma para realizar Transacciones en la Plataforma, se habilitará una cuenta personal para dicho Usuario (´Cuenta Banexcoin´). La Cuenta Banexcoin habilita a su titular a realizar Transacciones en la Plataforma, mantener saldos en criptomonedas y otras monedas, así como efectuar créditos y débitos en la Cuenta Banexcoin, para la realización de Transacciones y Transferencias a cuentas bancarias de su titularidad. Para dotar de saldo a la Cuenta Banexcoin, el Usuario debe transferir BTCs o cualquier criptomoneda autorizada por la Plataforma a la billetera pública asociada a la Cuenta Banexcoin, o fondos a la cuenta bancaria de Banexcoin, una afiliada de Banexcoin o un proveedor de servicios de Banexcoin según se indique en la Plataforma. La Plataforma no utiliza ni dispone de dichos saldos bajo ninguna circunstancia.<br/>' +
					'<b>Dash (anteriormente conocida como Darkcoin y XCoin):</b> es una criptomoneda peer-to-peer de código abierto que ofrece las mismas características de Bitcoin pero además tiene funcionalidades avanzadas, incluidas las transacciones instantáneas (InstantSend), transacciones privadas (PrivateSend), y gobernanza descentralizada (DGBB). Dash usa una arquitectura de dos niveles para impulsar su red. El primer nivel consiste de mineros quienes aseguran la red y registran las transacciones en la blockchain. El segundo nivel consiste en masternodes que posibilitan las características avanzadas de Dash. Dash fue liberada inicialmente como XCoin (XCO) el 18 de enero de 2014. El 28 de febrero, se cambió el nombre a “Darkcoin”. El 25 de marzo de 2015, Darkcoin fue rebautizado como “Dash”. Dash es un juego de palabras para “Digital Cash” que en español significa “Dinero Digital”<br/>' +
					'<b>DApp:</b> Aplicación descentralizada.<br/>' +
					'<b>Descentralización:</b> Característica de los sistemas que no dependen de un punto central o punto único para funcionar. Favorece la independencia y complica la censura y el control.<br/>' +
					'<b>Dirección:</b> Cadena de números y letras que se producen normalmente a partir de las claves pública y privadas y que podríamos definir como la huella digital de dichas claves. La dirección (por ejemplo: 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2) es una versión más reducida de clave pública. La clave privada es la que da acceso a la criptomoneda registrada en la pública y debe, por tanto, mantenerse en secreto. La dirección pública es la “cuenta” que podemos compartir con el resto de la red para que nos envíen criptomonedas y es la dirección pública de otro usuario lo que utilizamos para indicar en una transacción el receptor de los fondos que enviamos.<br/>' +
					'<b>EOS:</b> Criptomoneda nativa del protocolo EOS:IO<br/>' +
					'<b>EOS.IO:</b> Es un protocolo blockchain que funciona como una plataforma de contrato inteligente y un sistema operativo descentralizado destinado a soportar aplicaciones descentralizadas a escala industrial (DApps). La plataforma puede manejar millones de transacciones en un segundo, una de las características que la distinguen de otras plataformas similares. El protocolo EOS.IO emula la mayoría de los atributos de una computadora real, incluido el hardware con los recursos informáticos distribuidos equitativamente entre los titulares de criptomonedas EOS.<br/>' +
					'<b>Ether (ETH):</b> Unidad de cuenta o token de Ethereum. Es un elemento necesario, un combustible, para operar Ethereum. Es una forma de pago realizada por los clientes de la plataforma a las máquinas que ejecutan las operaciones solicitadas. Es el incentivo que asegura que los desarrolladores escriban aplicaciones de calidad, y que la red se mantenga saludable ya que las personas reciben una compensación por sus recursos aportados.<br/>' +
					'<b>Ethereum:</b> Plataforma open source, descentralizada y basada en el modelo blockchain que permite la creación de contratos inteligentes. Utiliza un sistema de consenso de tipo PoW, si bien se encuentra en una fase de desarrollo en la que se está probando el sistema PoS. Utiliza un token llamado ether que permite la ejecución de los contratos inteligentes sobre su red usando una Máquina Virtual (Ethereum Virtual Machine o EVM) que funciona de forma distribuida gracias al aporte de los mineros que son recompensados con ethers.<br/>' +
					'<b>Exchange:</b> Es un sitio que permite operar entre distintos activos digitales y moneda real (fiat). Los exchanges son mercados financieros que permiten bajo los principios de la libre oferta y demanda de sus usuarios darle un valor económico a los Activos Digitales que se manejan o están autorizados dentro de dichos sitios.  Pueden ser simples intermediarios entre usuarios comunes o institucionales, así como proveer además funcionalidades más complejas de trading.<br/>' +
					'<b>FOMO:</b> Acrónimo de Fear of missing out. Miedo a perderse una subida de precios.<br/>' +
					'<b>Fork (Bifurcación):</b> Situación en la que una cadena de bloques se divide en dos cadenas separadas temporal o permanentemente. Se produce cuando se toma el código fuente de un proyecto y se crea un nuevo proyecto a partir de este con una nueva dirección. Un hard fork ocurre cuando una cadena de bloques se divide en dos cadenas separadas incompatibles, esto es una consecuencia del uso de dos conjuntos de reglas incompatibles que intentan gobernar el sistema. Un soft forkes un cambio de reglas que crea bloques reconocidos como válidos por el software anterior, es decir, es compatible con versiones anteriores.<br/>' +
					'<b>FUD:</b> Acrónimo de Fear, Doubt and Uncertainty (Miedo, duda e incertidumbre). Propaganda de mercado bajista.<br/>' +
					'<b>Hot Wallet:</b> Cartera que está siempre conectada a la blockchain. Las monedas almacenadas pueden ser rápidamente intercambiadas con otros miembros de la red o ser usadas para hacer trading.<br/>' +
					'<b>ICO:</b> Acrónimo de Initial Coin Offering. Se utiliza para financiar el desarrollo de nuevos protocolos descentralizados en blockchain y viene inspirado del concepto de IPO (OPV) aunque son difícilmente comparables.<br/>' +
					'<b>Lightning Network:</b> Solución propuesta para resolver el problema de escalabilidad de bitcoin, permite la tramitación de pagos y micropagos de forma casi instantánea. La red utiliza un protocolo como capa secundaria a Bitcoin.<br/>' +
					'<b>Litecoin (LTC):</b> Litecoin fue lanzado a través de un cliente de código abierto en GitHub el 7 de octubre de 2011 es una Criptomoneda sustentada por la red P2P y un proyecto de software de código abierto publicado bajo la licencia MIT. Inspirada y prácticamente idéntica en su aspecto técnico a Bitcoin (BTC), la creación y transferencia de Litecoin se basa en un protocolo criptográfico de código abierto que no es administrado por ninguna autoridad central. Litecoin fue pensada para ser una moneda electrónica alternativa de Bitcoin y ofrece tres diferencias principales. En primer lugar, la red Litecoin realiza el procesamiento de un bloque cada 2,5 minutos en vez de cada 10 minutos, lo cual permite una confirmación más rápida de transacciones. En segundo lugar, la red Litecoin producirá aproximadamente 4 veces más unidades que Bitcoin o cerca de 84 millones de Litecoins. En tercer lugar, Litecoin utiliza la función scrypt en su algoritmo de prueba de trabajo: una función secuencial de memoria dura concebida por primera vez por Colin Percival, facilitando la minería, ya que no necesita de equipamiento sofisticado como en el caso de Bitcoin. Cada litecoin es fraccionado en 100.000.000 unidades más pequeñas, definidas por ocho decimales.<br/>' +
					'<b>Mandante:</b> El Usuario que solicita la compra o venta de BTC u otra criptomoneda a la Plataforma, de acuerdo con estos Términos.<br/>' +
					'<b>Market Cap (Capitalización de mercado):</b> Oferta total del número de criptomonedas o tokens multiplicado por la cotización de la criptomoneda en aquel momento.<br/>' +
					'<b>Moneda fíat:</b> Dinero de curso legal. Únicamente los bancos centrales tienen el poder de emitir dinero fiat, pero los bancos comerciales lo pueden crear a través de préstamos.<br/>' +
					'<b>Monedero (cartera o wallet):</b> Software que almacena las claves privadas que se necesitan para acceder a las criptomonedas registradas en una dirección o clave pública para gastarlos. Hay varios tipos de monederos dependiendo de la forma en que se almacena la clave privada. Algunos utilizan las casas de cambio como monederos online (Coinbase, Blockchain.info, Kraken, etc.) y otros utilizan monederos físicos (Trezor, Ledger Nano, papel), siendo estos últimos los más seguros. En cualquiera de sus formas, si se pierde la clave privada se pierde el dinero.<br/>' +
					'<b>Monero (XMR):</b> es una criptomoneda de código abierto creada en abril de 2014, que prioriza la privacidad y la descentralización, y se ejecuta en Windows, macOS, Linux, Android y FreeBSD.  Monero usa un registro de transacciones público y las nuevas unidades se crean mediante un proceso llamado "minado". Su objetivo es mejorar los anteriores diseños de criptomonedas, ocultando la identidad de emisores y receptores y las cantidades de las transacciones, así como haciendo más igualitario el proceso de minado<br/>' +
					//'<b>Mooning:</b> Precios que se van por las nubes, en inglés se describe como “ir a la luna”.<br/>' +
					'<b>Multifirma (multisignature):</b> Es una forma de tecnología usada para añadir seguridad en las transacciones de una cartera. Para que dicha cartera pueda transaccionar es necesario que varios usuarios aprueben la realización de dichas transacciones.<br/>' +
					'<b>OTC:</b> Por sus siglas en inglés de over-the-counter, se refiere a una operación que no se realiza en una bolsa formal. En su lugar, la mayoría de las operaciones OTC se realizan entre dos partes, y a menudo se realizan a través de un mercado formal. El trading OTC está menos regulado que las operaciones de bolsa, lo que crea una serie de oportunidades, a la vez que algunos riesgos de los que debe ser consciente.<br/>' +
					'<b>Plataforma:</b> Se refiere a la estructura técnica, funcional y organizativa administrada por Banexcoin S.A. que permite a los Usuarios concretar compras y ventas de criptomonedas y divisas fiat manejadas en el Exchange a través de un mandato otorgado a Banexcoin, así como transferencias a terceros y la realización de cobros y pagos.<br/>' +
					'<b>Precio de Transacción:</b> El precio total a pagar o percibir por el Mandante por cada transacción realizada en la Plataforma.<br/>' +
					'<b>Precio por Moneda:</b>  Es el \'Precio Por Moneda\' desplegado en todo momento por la Plataforma para 1 (un) BTC o aquellas criptomonedas autorizadas por la Plataforma y que refleja el monto por el que se pueden adquirir o vender una unidad de las mismas al momento de realizar cualquier transacción. El Precio Por Moneda está expresado en las monedas soportadas por la Plataforma.<br/>' +
					'<b>Ripple (XRP):</b>  es un proyecto basado en un software libre que persigue el desarrollo de un sistema de crédito basado en el paradigma de extremo a extremo. Cada nodo de Ripple funciona como un sistema de cambio local, de tal manera que todo el sistema forma un banco mutualista descentralizado. Llevado al extremo, la red Ripple es un servicio de red social distribuido basado en el honor y en la confianza entre las personas existentes en las redes sociales del mundo real. De esta manera, el capital financiero se sustenta en el capital social. Una versión reducida de la red ripple consistiría en una extensión del sistema bancario jerárquico existente, en el cual existirían rutas de pago alternativas que no pasarían por un banco central. Técnicamente hablando, Ripple es la red y XRP es el dinero o moneda en esa red sin embargo generalmente se refieren a XRP como ripple. Esto no es completamente correcto, pero en general no causa ninguna confusión.<br/>' +
					'<b>Stablecoin:</b> Las Stablecoins son criptomonedas diseñadas para minimizar la volatilidad del precio en relación con algún activo o canasta de activos "estable". Una stablecoin se puede vincular a una moneda fíat, o para intercambiar productos comercializados (como metales preciosos o metales industriales). Se dice que las estables respaldadas por monedas fíat o productos directamente están centralizadas, mientras que las que utilizan otras criptomonedas se consideran descentralizadas.<br/>' +
					'<b>Tether (USDT):</b> Criptomoneda lanzada en 2014 por Tether Limited, Tether es un token que utiliza utiliza la infraestructura de la cadena de bloques de Bitcoin y promete respaldar sus propios tokens digitales, llamados Tethers con dólares estadounidenses en una cuenta bancaria de reserva. Donde un tether equivale a un dólar estadounidense, por lo cual es considerado un stablecoin. Si bien el valor de las fichas de Tether está vinculado al dólar estadounidense, algunas bolsas no ofrecen emparejamientos directos USD/USDT, y deberás usar Bitcoin u otra criptomoneda para operar con Tether.<br/>' +
					'<b>Token:</b> Unidad de valor. Activo digital alojado en una blockchain que permite a su propietario atribuírselo a un tercero a través de la cadena de bloques. Permite en su configuración varias capas de valor, lo que lo convierte en una especie de baúl digital en el que, según su programación, pueden incluirse uno o varios derechos.<br/>' +
					//'<b>Tokenomics:</b> Estudio de la creación de incentivos económicos basados en la creación de unidades de valor sobre la cual se pueden crear modelos de negocio auto-gobernables, que empoderen al usuario para interactuar con sus productos, facilitando la distribución y compartiendo los beneficios entre todos los participantes<br/>' +
					'<b>Transacción:</b> Es la operación de compra (o venta) de BTCs o cualquier otra criptomoneda autorizada en el Exchange y realizada por la Plataforma en cumplimiento del mandato otorgado por un Mandante, en las monedas soportadas en la Plataforma y al precio indicado en la Plataforma en el momento en que se acuerda la Transacción (\'El precio de transacción\'), así como también la transferencia de criptomonedas de la cuenta del Usuario para la adquisición de bienes o servicios.<br/>' +
					'<b>USD Coin (USDC):</b> Criptomoneda que entra en el grupo de las llamadas Stablecoin ya que su valor está anclado al de un dólar estadounidense debido a que Centre, la sociedad mercantil que acuña USDC, deposita de forma colectiva un dólar por cada USDC, estos fondos se depositan en una cuenta bancaria especial que se supervisa y audita constantemente, es un token de Ethereum y cada USD Coin es divisible hasta en 0,000001 con valor. <br/>' +
					'<b>Usuario:</b>  Todo titular de una cuenta registrada en Banexcoin.<br/>' +
					'<b>XRP:</b> Criptomoneda utilizada en el protocolo Ripple, tiene su origen el año 2012 en los Laboratorios de Ripple con un número máximo de cien millones de XRP ya creados, actualmente, el 40% de las existencias en circulación es negociado en mercados. El 60% restante es administrado por el propio Ripple.<br/>' +
					'<b>Zcash (ZEC):</b> es una criptomoneda destinada a utilizar la criptografía para proporcionar un método más avanzado de privacidad a sus usuarios, en comparación con otras criptomonedas como Bitcoin. El protocolo antiguo de Zerocoin se mejoró y se convirtió en el sistema Zerocash, que luego se desarrolló en la criptomoneda Zcash en 2016. El desarrollo del protocolo criptográfico y la implementación de referencia está dirigido por Zerocoin Electric Coin Company, coloquialmente llamada Zcash Company.<br/>',
			'term_cuenta_title' : '3. Su Cuenta Banexcoin',
			'term_cuenta' : 'Cada Usuario completará los datos y remitirá toda la documentación e información solicitada por la Plataforma, y otros documentos que permitan conocer su real situación personal, económica, financiera y fiscal, a fin de dar el alta de su Cuenta Banexcoin. Hasta tanto y en cuanto esto suceda y la información suministrada sea verificada, la Plataforma podrá limitar o impedir sus operaciones en la misma. Los Usuarios son responsables de mantener la confidencialidad de la información de su Cuenta Banexcoin, incluyendo su contraseña o password y Transacciones. Los Usuarios serán los únicos responsables por todo acto realizado a través de la Plataforma mediante el uso de su Cuenta Banexcoin. Los Usuarios no deben intentar obtener acceso no autorizado al Sitio, y cualquier intento de hacerlo o de ayudar a otros (Usuarios o terceros) a hacerlo, o distribución de instrucciones, software o herramientas a tal propósito, resultará en la terminación de las cuentas de dichos Usuarios, reservándose Banexcoin la facultad de iniciar todas las acciones legales que por derecho pudieren corresponder. Los Usuarios se comprometen a proveer información y documentación fidedigna, real, completa y actualizada a la Plataforma, tal como le sea requerida ya sea en el proceso de registración y a lo largo de la relación; y mantendrán dicha información y documentación actualizada.<br/><br/>' +
				'Al momento de ser considerado como Usuario y por el sólo hecho de serlo, usted declara que está actuando por cuenta propia y No por orden ni cuenta de terceros, bajo ningún concepto y bajo ninguna circunstancia, y además reconoce de acuerdo a los Términos aquí establecidos que le está prohibido permitir que otra persona use la Cuenta Banexcoin o que un tercero ostente con credenciales de acceso propias del Usuario verificado o actuar por cuenta de cualquier tercero. Asimismo, reconoce que en caso de que se detecte que un Usuario está violando lo dispuesto en el presente apartado, será sujeto a un proceso de revisión, reporte de sus operaciones y será suspendido, Banexcoin tendrá el derecho de iniciar en su contra cualquier acción que corresponda, conforme a lo previsto por cualquiera de las disposiciones legales aplicables a la misma.<br/><br/>' +
				'Los Usuarios sólo pueden tener una única Cuenta Banexcoin en un momento dado, y no pueden crear o usar cuentas que no sean la propia. La creación y uso de Cuentas Banexcoin infractoras puede resultar en la suspensión y/o cierre inmediato de todas las Cuentas Banexcoin de un Usuario, y sus Transacciones pendientes.<br/><br/>' +
				'La Plataforma podrá requerir información adicional a un Usuario cuando lo estime necesario a fin de dar cumplimiento a las políticas de Prevención de Lavado de Dinero (AML) y Financiamiento del Terrorismo, Origen de Fondos, Conocimiento del Cliente (KYC) o similares.  En ciertos casos la traducción, certificación, legalización de ciertos documentos, incluyendo Apostillas, podría ser requerida.<br/><br/>' +
				'Los Usuarios deben proporcionar una cuenta bancaria que demuestre su titularidad con la que operará en la Plataforma. No se aceptarán transferencias a la Cuenta Banexcoin si no provienen de la cuenta bancaria proporcionada por el Usuario. En el caso de que sean realizadas transferencias por cualquier tercero a la cuenta de un Usuario, Banexcoin se reserva el derecho de devolver dicha transferencia y de iniciar cualquier acción que considere conforme a la legislación aplicable.<br/><br/>' +
				'Para retirar saldos en forma total o parcial, el Usuario debe solicitar una transferencia a dicha cuenta bancaria a través de la Plataforma, las que se ejecutarán dentro de los dos días hábiles bancarios a su solicitud. Bajo ninguna circunstancia se transferirán saldos de la Cuenta Banexcoin sin que medie una instrucción del Usuario a través de la Plataforma. La Plataforma se reserva el derecho de limitar las jurisdicciones para las que se aceptan cuentas bancarias, y/o rechazar la cuenta bancaria propuesta por el Usuario.<br/><br/>' +
				'Las Cuentas y/o Transacciones pueden ser suspendidas hasta cumplir satisfactoriamente estos Términos y las regulaciones aplicables. La Plataforma puede requerir información adicional en cualquier momento tras el pedido de la autoridad competente o por aplicación de cualquier política, ley o regulación aplicable. Las cuentas deben ser usadas estrictamente para los propósitos definidos en estos Términos.  Serán válidas y vinculantes todas notificaciones realizadas a la dirección de correo electrónico indicada por el Usuario al momento de la solicitud de apertura de la cuenta; así como las enviadas al domicilio indicado por el Usuario en su Cuenta Banexcoin.<br/><br/>',
			'term_mandato_title' : '4. Mandato para la compra de criptomonedas',
			'term_mandato' : 'I. El Mandante otorga mandato a Banexcoin para que este adquiera BTC o cualquier otra criptomoneda autorizada por la Plataforma por cuenta y orden del Mandante, en las condiciones indicadas en estos Términos.<br/>' +
				'II. La ejecución del mandato por parte de Banexcoin está condicionada a: 1) la existencia de saldo a favor del Mandante en su Cuenta Banexcoin; y 2) la instrucción de ejecución dada por el Mandante en la Plataforma, indicando la cantidad de Activos Digitales autorizados a adquirir (o vender), el monto y Precio de Transacción.<br/>' +
				'III. Banexcoin llevará a cabo sus mejores esfuerzos para disponer los saldos en la Cuenta Banexcoin en tiempo breve luego de su acreditación en la cuenta bancaria de Banexcoin indicada, estimándose que la acreditación se realizará el siguiente día hábil bancario. El monto recibido al cual se le debitarán los impuestos y/o gastos bancarios que pudieren corresponder será el monto a acreditar en la cuenta Banexcoin del Usuario. Banexcoin enviará una notificación por correo electrónico al Mandante al momento de la acreditación y disponibilidad en su Cuenta Banexcoin.<br/>' +
				'IV. A partir del momento en que se disponen saldos en la Cuenta Banexcoin, el Mandante podrá impartir instrucciones de compra de criptomonedas a través de la Plataforma.<br/>' +
				'V. Cualquier instrucción así impartida será irrevocable y genera obligaciones vinculantes y ejecutables para el Mandante y Banexcoin.  Cada transacción así celebrada tendrá un cargo que será informado antes de realizar la misma el cual se deducirá de la Cuenta Banexcoin.<br/>' +
				'VI. Todos los criptoactivos autorizados por la Plataforma adquiridos en virtud del presente serán acreditados en el saldo correspondiente de su Cuenta Banexcoin una vez acreditados Banexcoin habrá dado total cumplimiento a sus obligaciones en relación con dicha transacción. La conservación y gestión de la billetera y sus saldos es en todo momento de exclusiva responsabilidad del Mandante. En caso que el Mandante vendiera BTC o cualquiera de los criptoactivos autorizados a través de la plataforma Banexcoin, el producto de dicha venta será integrado a la Cuenta Banexcoin, una vez deducidos los cargos y comisiones aplicables.<br/>',
			'term_plataforma_title' : '5.	Reglas Operativas y Obligaciones de la Plataforma',
			'term_plataforma' : 'Los Usuarios aceptan y acuerdan que la Plataforma no garantiza la ejecución de todas las órdenes suscriptas por los Usuarios, y no se responsabiliza por cuestiones técnicas o normativas ajenas a la Plataforma como, por ejemplo: fallas en la comunicación entre el proveedor de acceso a Internet del Usuario hacia la red global y/o a la Plataforma.  La Plataforma no provee consejos respecto de la legalidad, impuestos, seguros o inversiones, incluso tampoco respecto de las transacciones llevadas a cabo en la Plataforma.' +
			'Todas las órdenes de compra o venta inmediata se ejecutan al instante mediante una compra directa a la mejor postura de venta disponible o una venta a la mejor postura de compra disponible; las demás posturas de compra o venta se ejecutan cuando se logra empatar una oferta complementaria. No garantizamos que su orden se llenará incluso si el precio de mercado es igual al monto ofrecido en su orden, lo que usted reconoce y acepta.<br/><br/>' +
			'Las órdenes pueden ser objeto de retrasos, contratiempos y/o condiciones que pueden llegar a afectar la transmisión o ejecución de las mismas. Banexcoin no tiene control, sobre fallas del hardware, software, electrónica o la congestión del mercado, por lo que, en estos casos, no somos responsables de los retrasos, dificultades o condiciones que afectan negativamente a la transmisión o la ejecución de las órdenes, lo que usted reconoce y acepta.<br/><br/>' +
			'Nos reservamos el derecho, sin estar obligados, a implementar mecanismos para que todas las órdenes de compra o venta pasen mediante sistemas automatizados para facilitar las labores de cumplimiento. Si su orden se encuentra en alguno de los supuestos a partir de los cuales se generan alertas, comprobaciones o si cumple ciertos criterios definidos, puede requerir revisión y aprobación manual. Banexcoin atenderá las autorizaciones manuales a la brevedad posible, pero no somos responsables de los retrasos que pudiesen ocurrir, ni de cualesquiera pérdidas o daños patrimoniales resultantes.<br/><br/>' +
			'Banexcoin no es responsable de la operación y de los protocolos subyacentes relacionados con las redes de Activos Digitales listados en la Plataforma y por lo tanto no se garantiza la funcionalidad o disponibilidad de los mismos; En el caso de que se presente alguna modificación al protocolo (como por ejemplo un “chain split”, o cualquier otro cambio considerable al protocolo y/o sus reglas de consenso), el Usuario acepta que Banexcoin podrá suspender temporalmente las operaciones (con o sin previo aviso) por el tiempo que considere necesario y se reserva el derecho de cambiar la configuración de los sistemas de la Plataforma así como también decidir no apoyar una de las cadenas del protocolo que haya cambiado. El Usuario reconoce y acepta que no asumimos absolutamente ninguna responsabilidad con respecto a una rama no soportada de un protocolo que haya presentado cambios.<br/><br/>' +
			'En caso de que se hayan realizado cambios importantes en los protocolos y/o reglas de consenso de determinado Activo Digital o se lleve a cabo un Soft Fork, Hard Fork, Chain Split, Banexcoin tomará alguna de las siguientes acciones:<br/>' +
			'<ul class="lista_term">' +
				'<li>A.	En caso de que Banexcoin decida apoyar ambas versiones del protocolo, trataremos en lo posible de mantener la disponibilidad de ambos Activos Digitales, a los cuales se les denomina "split tokens".</li>' +
				'<li>B.	En caso de que Banexcoin decida no apoyar alguna de las cadenas del protocolo o alguno de los protocolos, Banexcoin no asume ninguna responsabilidad ni obligación de mantener la disponibilidad de los Activos Digitales de la cadena que la Plataforma haya decidido No apoyar.</li>' +
				'<li>C.	En cualquier caso, es posible que Banexcoin decida No apoyar ninguna de las versiones de alguna cadena o de algún protocolo. Esta decisión podrá ser temporal o permanente.</li>' +
			'</ul>' +
			'En cualquiera de los casos anteriores, Banexcoin se reserva el derecho no estando obligado a publicar en su página web una comunicación con la descripción específica de las medidas que serán tomadas caso por caso.',
			'term_usuarios_title' : '6. Obligaciones de los Usuarios',
			'term_usuarios' : 'Los Usuarios manifiestan y garantizan que sólo utilizaran la Plataforma para realizar Transacciones de acuerdo con las condiciones detalladas en estos Términos y que tienen la capacidad legal para efectuar las mismas.  El Usuario garantiza que todo monto depositado en su cuenta Banexcoin proviene de fuentes legítimas, y que toda Transacción y Transferencia a su cuenta bancaria realizada tendrá objeto lícito.' +
				'Los Usuarios garantizan que no utilizarán la Plataforma para realizar actividades ilegales de ningún tipo, incluyendo, pero no limitando, a lavado de activos y financiamiento del terrorismo; fraude, estafas y otras defraudaciones o ilícitos. También aceptan que no utilizaran la Plataforma de manera indebida que implique de algún modo reducir el rendimiento y la capacidad operativa de la misma.' +
				'Es obligación de los Usuarios cumplir con las políticas y recomendaciones de seguridad que establece la Plataforma en su apartado Soporte > Seguridad para garantizar la integridad de sus activos digitales. Para mas información refiérase a: https://www.banexcoin.com/seguridad.  En caso de que el Usuario decida instalar una aplicación 2FA en algún dispositivo (por ejemplo, teléfono o tableta), lo hace bajo su propio riesgo. Banexcoin no podrá ser responsable de la fuga o pérdida ya sea de información o de fondos, derivado de la utilización de una aplicación 2FA en un dispositivo cuyo sistema operativo haya sido alterado, por ejemplo, Jailbreak (iOS) o Root (Android) u otro tipo.' +
				'El proceso de recuperación de credenciales de acceso a una Cuenta Banexcoin solamente se realizará mediante los procedimientos que para ello ha designado Banexcoin tomando en cuenta los más altos estándares de seguridad. Dicho proceso únicamente podrá ser iniciado por el Usuario y nunca provendrá por parte de Banexcoin. Banexcoin nunca le pedirá bajo ninguna circunstancia a ningún Usuario bien sea por correo, correo electrónico ni por vía telefónica que revele las credenciales de acceso a su Cuenta Banexcoin. El Usuario nunca deberá proporcionar sus credenciales de acceso a otra persona. Banexcoin, sin embargo, podrá tener acceso al Usuario en los casos y circunstancias previstas en estos Términos de Uso.' +
				'Banexcoin entiende como válidas todas las operaciones que realice en Usuario después de haber iniciado sesión en su cuenta, por ejemplo, de manera enunciativa más no limitativa a posturas de compra o venta, transferencias o cualquier uso de los servicios. Mediante estos Términos, usted acepta que es responsable, y está obligado, sin responsabilidad alguna para Banexcoin a las obligaciones de pago o entrega, así como a cargos o pérdidas que puedan surgir como consecuencia de, o en relación con una postura o transferencia que se realicen en Banexcoin, mediante el uso de las credenciales de inicio de sesión, así como los procesos de autenticación, asociados a la propia cuenta del Usuario. Por el solo hecho de acceder al sitio de Banexcoin y ordenar o celebrar cualquier operación en términos del mismo (aún en el caso que un tercero hiciere uso inapropiado de Banexcoin por cuenta del Usuario), el Usuario se obliga a responder de las obligaciones que le sean atribuibles o en las que haya incurrido, en términos de estos Términos. El Usuario se obliga a responder, con todo su patrimonio, de cualesquiera de sus obligaciones en estos Términos. Banexcoin entiende como válidas todas las operaciones que realice en Usuario después de haber iniciado sesión en su cuenta, por ejemplo, de manera enunciativa, mas no limitativa a: posturas de compra o venta, transferencias o cualquier uso de los servicios. Mediante estos Términos, usted acepta que es responsable de los cargos o pérdidas que puedan surgir como consecuencia, o en relación con una postura o transferencia que se realicen en Banexcoin, mediante el uso de las credenciales de inicio de sesión, así como los procesos de autenticación asociados a la propia cuenta del Usuario.' +
				'Es entonces responsabilidad del Usuario notificar a Banexcoin si cree o sospecha que su cuenta o sus credenciales pueden haber sido comprometidas, o si un tercero está actuando por su cuenta, para lo cual deberá informarlo al correo electrónico: <a href="mailto:notificaciones@banexcoin.com">notificaciones@banexcoin.com</a>  Además, el Usuario se obliga a tomar todas las medidas necesarias o convenientes que le solicite Banexcoin en relación con cualquiera de las conductas citadas.',
			'term_cargos_omisiones_title' : '7.	Tarifas y Comisiones',
			'term_cargos_omisiones' : 'La contraprestación a favor de Banexcoin es de un porcentaje del monto de cualquier Transacción o Transferencia bancaria realizada a través de la Plataforma, porcentaje que será informado por la Plataforma antes de ejecutar cualquier Transacción o Transferencia, se devenga ante cada Transacción o Transferencia y se debita de la cuenta Banexcoin en forma automática. No se realizarán Transacciones ni Transferencias bancarias si no existiera saldo suficiente para la misma, o para el pago de la contraprestación a Banexcoin.  En el caso que sea solicitada por el Usuario la factura electrónica será enviada al correo electrónico verificado por el Usuario en su cuenta Banexcoin. Para ver el detalle de las comisiones por favor visite la sección Tarifas y Comisiones en <a href="https://www.banexcoin.com">https://www.banexcoin.com</a>.<br/><br/>' +
			'Banexcoin hace de su conocimiento que los fondos son propiedad de los usuarios que publican sus órdenes o posturas de compra o venta y los fondos intercambiados producto de una operación de compra o venta van directamente a los Usuarios. Banexcoin únicamente obtiene recursos a partir del cobro de comisiones por prestación de sus servicios en la realización de cada postura de venta o compra exitosa. Por consiguiente, Banexcoin únicamente puede proporcionarle un comprobante fiscal por el importe cobrado por concepto de comisiones, tal como se establece en estos Términos y en la sección Tarifas y Comisiones de la Plataforma antes mencionada y es responsabilidad del Usuario consultar de forma periódica dichos valores debido a que los mismos pueden ser modificados por Banexcoin sin previo aviso.<br/><br/>' +
			'La contraprestación a favor de Banexcoin es de un porcentaje del monto de cualquier Transacción o Transferencia bancaria realizada a través de la Plataforma, porcentaje que será informado por la Plataforma antes de ejecutar cualquier Transacción o Transferencia, se devenga ante cada Transacción o Transferencia y se debita de la cuenta Banexcoin en forma automática. No se realizarán Transacciones ni Transferencias bancarias si no existiera saldo suficiente para la misma, o para el pago de la contraprestación a Banexcoin.  La factura electrónica será enviada al correo electrónico indicado por el Usuario en su cuenta Banexcoin. Para ver el detalle de las comisiones por favor visite la sección <b>Tarifas Aplicables</b> en Banexcoin.com.<br/><br/>' +
			'La Plataforma cuenta con una clasificación de sus Usuarios de acuerdo al Nivel de Verificación con que cuenten los mismos, dicha información se muestra en <a href="https://www.banexcoin.com/niveles-clientes">https://www.banexcoin.com/niveles-clientes.html</a>, lo cual determina los límites que tienen estos para operar sus activos dentro de la Plataforma, para esto el Usuario acepta este sistema clasificatorio y deberá consignar mediante la Plataforma la documentación requerida según el nivel que se desee tener, dicha información será procesada y analizada por el Departamento o Unidad respectiva utilizando los medios que Banexcoin crea convenientes incluso haciendo uso de herramientas de análisis de compañías o entes externos a Banexcoin.<br/><br/>',
			'term_normas_aplicables_title' : '8.	Cumplimiento con normativas aplicables',
			'term_normas_aplicables' : 'Banexcoin y todas sus afiliadas relacionadas con cualquier transacción darán cumplimiento a toda normativa actual o futura aplicable a las mismas, incluyendo, pero no limitando, la eventual obligación de informar ciertas operaciones a las autoridades de control de movimientos financieros (OFAC), organismos de Prevención y lucha contra el lavado de activos o financiamiento del terrorismo, organismos fiscales, entre otros, proveyendo toda la información y/o documentación requerida por estos organismos.  De la misma manera, Banexcoin dará cumplimiento a cualquier obligación impositiva a su cargo relacionada con las transacciones, incluyendo, pero no limitando, a la obligación de efectuar retenciones en caso de ser aplicables.  El Usuario es el único responsable de dar cumplimiento a sus propias obligaciones impositivas en relación con las Transacciones y la Cuenta Banexcoin. El Usuario asume total responsabilidad de dar cumplimiento a toda obligación impositiva en relación con las Transferencias bancarias desde o hacia su propia cuenta, así como también sobre la legalidad de la transferencia solicitada, y garantiza a Banexcoin que no se requiere efectuar retención ninguna sobre las mismas.' +
				'Como Política de Banexcoin de Prevención de Lavado de Activos y financiación del terrorismo, no se aceptarán transacciones y/u operaciones en efectivo; así como tampoco se aceptarán giros y/o transferencias de terceros.  Todas las Transacciones, sin excepción, se realizarán cuando los fondos sean girados y/o transferidos a la cuenta de Banexcoin desde una cuenta bancaria cuya titularidad corresponda al Usuario y coincida con la registrada en Banexcoin. Asimismo, los retiros de saldos en forma parcial o total serán cursados sólo cuando exista una instrucción por parte del Usuario, y los saldos involucrados serán transferidos, sin excepción a cuentas cuya titularidad corresponda al Usuario.' +
				'En caso de detectarse operaciones que pudieran corresponder a una actividad de arbitraje, Banexcoin se reserva el derecho de solicitar información y/o documentación adicional al Usuario respecto de las contrapartes con las cuales está operando; montos involucrados en las transacciones, etc.; pudiendo en su caso determinar el cierre de la cuenta Banexcoin.' +
				'Banexcoin se reserva el derecho de no realizar una determinada transacción cuando la misma no sea acorde al conocimiento que se tiene del Usuario, de su situación personal, patrimonial, económica y/o fiscal; en base a la información y documentación que el Usuario haya aportado; y/o cuando la realización de dicha transacción pudiera infringir alguna normativa legal, fiscal, y/o de algún procedimiento en particular. En caso de producirse dicha circunstancia Banexcoin transferirá los fondos que haya recibido por parte del Usuario, a la misma cuenta desde la cual hayan sido transferidos los mismos, descontando los impuestos, gastos bancarios y/o comisiones que pudieren aplicarse.',
			'term_responsabilidad_title' : '9.	Responsabilidad',
			'term_responsabilidad' : 'Los Usuarios manifiestan y garantizan que son los dueños legítimos de los fondos y que tienen permitido utilizar todas las sumas depositadas en su Cuenta Banexcoin; y que las Transacciones no infringen los derechos de terceros ni las leyes aplicables. Los Usuarios deberán indemnizar a Banexcoin por los daños sufridos y todas las acciones de responsabilidad llevadas adelante contra Banexcoin originadas en la infracción de derechos de terceros y/o las leyes aplicables por parte de un Usuario, autorizando a la Plataforma a inmovilizar el saldo de su Cuenta Banexcoin hasta tanto se resuelva la situación así planteada, y eventualmente utilizar dichos saldos para resarcir los daños causados, a criterio de la Plataforma. En la medida en que sea permitido por la ley, la Plataforma, y sus dueños no serán responsables por daños, lucro cesante, pérdida de ganancias, pérdida de negocios, pérdida de oportunidades, pérdida de datos, y pérdidas directas o indirectas.<br/><br/>' +
				'El Sitio no puede ser responsabilizado por ninguna falla en su funcionamiento, cese del servicio, tardanza o interrupción debida a las conexiones de Internet, o si por alguna razón el Sitio se encontrara fuera de servicio en cualquier momento y por cualquier periodo de tiempo. En los casos en que nuestro sitio contenga enlaces a otros sitios y recursos provistos por terceros, estos enlaces son provistos solo para su información. No poseemos control sobre los contenidos de esos sitios y recursos, y no aceptamos responsabilidad por ellos ni por las pérdidas y daños que pudieran producirse al usarlos.  En caso de sospecha de la existencia de un delito, Banexcoin podrá reportar toda la información necesaria, incluyendo nombres, direcciones y toda la información requerida, a las autoridades relevantes que investiguen el crimen financiero y/o las violaciones a la ley.  Los Usuarios reconocen que su Cuenta Banexcoin puede ser suspendida, inhabilitada, bloqueada, y/o cerrada en cualquier momento, a pedido de las autoridades competentes.  Nada en estos Términos excluye o limita la responsabilidad de los Usuarios por fraude, muerte, o daños a las personas causadas por su negligencia, violación a los términos de servicio implícitas por las leyes vigentes, o cualquier otra responsabilidad que no sea limitada o excluida por la ley.<br/><br/>' +
				'Si usted está buscando información o pretende llevar a cabo cualquier actividad financiera ilegal o fraudulenta, lo conminamos a que deje este sitio inmediatamente y absténgase de utilizar los Servicios que proporciona la Plataforma. Por la presente Usted reconoce y acepta que es consciente de la legalidad de la utilización de nuestros servicios en su jurisdicción y que no utilizará los servicios que proporciona Banexcoin, si tal uso está prohibido o si viola las leyes de su estado o localidad, país u otra jurisdicción en la que se encuentre.<br/><br/>',
			'term_limitacion_responsabilidad_title' : '10.	Limitación de Responsabilidad',
			'term_limitacion_responsabilidad' : 'Los Usuarios manifiestan conocer la naturaleza, origen y volatilidad de las criptomonedas. En particular, pero sin limitarse a ello, los Usuarios manifiestan conocer que las criptomonedas no han sido reconocidas como monedas de curso legal o medios de pago por diversas autoridades monetarias, que el tratamiento legal de Bitcoins u otro criptoactivo difiere en distintas jurisdicciones, y que nada asegura que en el futuro esta situación cambie favorablemente. Los Usuarios manifiestan asimismo conocer los mecanismos de generación de las criptomonedas, y que las mismas no cuentan con respaldo de alguna autoridad monetaria soberana o de valores tangibles. Los Usuarios manifiestan también su conocimiento acerca de la extrema volatilidad de los Bitcoins y criptomonedas en general, y que la Plataforma no ha realizado ningún tipo de promesa o manifestación acerca de la evolución o performance de dichos activos.<br/><br/>' +
				'En virtud de lo anterior, los Usuarios asumen en su totalidad el riesgo de operar con Bitcoins o cualquier tipo de moneda (Cripto o Fíat) manejada en Banexcoin, liberando de toda responsabilidad o consecuencia emanada de ello a la Plataforma, sus operadores y titulares.<br/><br/>' +
				'El Usuario reconoce que todas las operaciones dentro de la Plataforma se realizan únicamente por el mismo y por lo expuesto en estos Términos, los activos digitales, las operaciones que puede llevar a cabo en la Plataforma y cualquier otra circunstancia relacionada, sin que este reciba asesoría alguna, orientación o guía por parte de Banexcoin.<br/><br/>' +
				'Banexcoin no tendrá responsabilidad alguna y en ningún caso será responsable frente a las decisiones o acciones que tome el Usuario mientras éste utilice los servicios o realice operaciones dentro de la Plataforma. En ningún caso se considerará que la operación en la Plataforma crea una relación de asesoría de inversión con el Usuario. Todos los empleados de Banexcoin tienen prohibido dar consejos de inversión o compra de activos digitales, cualquier operación que el Usuario realice en la plataforma es responsabilidad exclusiva del mismo.<br/><br/>',
			'term_regulacion_financiera_title' : '11.	Regulación Financiera y Autoregulación',
			'term_regulacion_financiera' : 'Banexcoin y su Plataforma no prestan servicios financieros ni operaciones relacionadas con la actividad financiera, o entidades del sector financiero. Banexcoin y su Plataforma están orientados a facilitar a los Usuarios registrados la compra y venta de Criptoactivos. La plataforma, el Servicio y el uso de los mismos pueden no estar sujetos a regulación financiera alguna, pues los Activos Digitales podrían no ser un activo financiero, o valor, en el país donde opera el Usuario. Sin embargo, todas las operaciones o depósitos están sujetas a las leyes, reglamentos y normas aplicables, que puedan en determinado momento regular el uso, transferencia y/o intercambio de Criptoactivos y su operación en Banexcoin.<br/><br/>' +
				'Banexcoin hace de su conocimiento que la Cuenta Banexcoin no es una cuenta bancaria y que Banexcoin no es una institución crediticia, los depósitos de los clientes en la forma que sea no generan interés alguno y los servicios prestados en la Plataforma no pagarán intereses por los fondos que utilice para la compra de cualquier Activo Digital autorizado dentro de la misma. Todas sus operaciones con Banexcoin están sujetas a las leyes, reglamentos y normas aplicables, que puedan regular el uso, transferencia, intercambio, de Activos Digitales y su operación en la Plataforma.' +
				'El dinero Fiat de los Usuarios abonado por estos a su Cuenta Banexcoin se mantienen en cuentas bancarias independientes a la operación comercial o administrativa de Banexcoin y no son utilizados en ninguna operación de intermediación financiera; los Usuarios reconocen y convienen que Banexcoin no es responsable por cualquier evento o circunstancia que afecte a cualquiera de las instituciones en las que mantenga los recursos de los Usuarios.' +
				'No obstante, lo anterior, en pro de la transparencia y el buen funcionamiento de la Plataforma, Banexcoin cuenta con al menos un oficial de cumplimiento, además de estrictas normas de autorregulación.',
			'term_terminacion_title' : '12.	Terminación',
			'term_terminacion' : 'Estos Términos pueden ser finalizados sin causa de parte de Banexcoin. Dicha terminación será efectiva cuando sea publicada en el Sitio o informada vía correo electrónico al Usuario. La terminación no afectará las obligaciones o derechos de ninguna de las partes establecidas en los mismos y que hayan ocurrido previo a la noticia de finalización, ni las transacciones y las obligaciones derivadas de las mismas y los derechos concluidos antes de que la terminación sea efectiva. Tras su notificación, el Usuario podrá requerir su reembolso.<br/><br/>' +
				'Si desearan finalizar su contrato con el Sitio, los Usuarios podrán ordenar el cierre de su cuenta en cualquier momento; para ello el Usuario deberá notificar su intención de cierre de manera expresa al correo electrónico notificaciones@banexcoin.com, La cuenta será cancelada una vez que: (i) el Usuario haya pagado o no tenga órdenes de compra o venta pendientes, (ii) que haya cumplido todas las operaciones que hubiese adquirido que no pudiesen cancelarse, (iii) que el Usuario haya retirado la totalidad de los fondos de Banexcoin.' +
				'Los Usuarios aceptan que el Sitio podría a su discreción y sin previo aviso, dar de baja el acceso de los Usuarios al Sitio y a su Cuenta, incluyendo pero no de manera taxativa a: limitar el acceso, suspender o dar de baja el servicio y las cuentas de los Usuarios, prohibir acceso a la Plataforma y su contenido, servicios y herramientas, retrasar o quitar contenido alojado en el sitio, y tomar las medidas técnicas y legales para mantener a los Usuarios fuera del Sitio si considera que están generando conflicto o posibles responsabilidades legales, infringiendo la propiedad intelectual de terceros, o actuando en desmedro de lo establecido en la letra y con intención en estos Términos.  Además, la Plataforma podrá, a su exclusivo criterio, suspender o dar de baja Usuarios y sus respectivas cuentas por cualquier razón y en cualquier momento, y sin tener que explicar la causa de dicha decisión. Se tomarán como causales de suspensión, baja de Usuarios y/o cierre de sus respectivas cuentas, las circunstancias que a modo enunciativo se detallan:' +
				'<ul class="lista_term">' +
					'<li>1. Intentos de obtener acceso no autorizado a la Plataforma o la cuenta de otro Usuario, o proveer asistencia a otros que intenten hacerlo.</li>' +
					'<li>2. Afectar o intentar afectar la funcionalidad de seguridad de la Plataforma.</li>' +
					'<li>3. Uso de la Plataforma para llevar adelante actividades ilegales como lavado de dinero, financiamiento del terrorismo, cualquier tipo de fraude u otras actividades criminales.</li>' +
					'<li>4. Proporcionar información o datos falsos, o no proporcionarlos, al ser requerido por la Plataforma en relación con el Usuario y las Transacciones realizadas a través de la Plataforma.</li>' +
					'<li>5. Violación de estos Términos.</li>' +
					'<li>6. Falta de pago o pago fraudulento por alguna Transacción.</li>' +
					'<li>7. Dificultades operativas inesperadas.</li>' +
					'<li>8. Pedidos por agencias del cumplimiento de la ley u otras agencias gubernamentales.</li>' +
				'</ul>' +
				'También Banexcoin se reserva el derecho a cancelar las cuentas que hayan estado inactivas por periodos de 6 meses o más, o a modificar o discontinuar la Plataforma. Los Usuarios aceptan que la Plataforma no será responsable ante ellos o terceros por la suspensión de su cuenta o acceso al Sitio.' +
				'En caso que Banexcoin decida dar de baja la cuenta, notificará de dicha decisión al Usuario. La notificación se realizará a la casilla de correo electrónico que el Usuario haya registrado al momento de solicitar la apertura de la cuenta. En caso de producirse ese hecho, y en caso que el Usuario posea saldo a su favor en la Plataforma deberá notificar en el plazo de diez (10) días continuos el número de Cuenta y Banco a fin de que le sea transferido el saldo correspondiente, y en caso que no exista ningún impedimento y/o medida judicial que lo disponga. Dichos datos deben corresponder sin excepción a una cuenta de su titularidad. Si el Usuario tuviera Bitcoins o cualquier otra criptomoneda autorizada en la Plataforma deberá informar a la casilla de correo electrónico: notificaciones@banexcoin.com dentro de los diez (10) días continuos una billetera válida y operativa de BTC o del criptoactivo del cual presenta saldo al momento del cierre de su cuenta Banexcoin a fin de que le sean transferidos los saldos que se tuvieran en la plataforma a dicha fecha.  En caso de que el cliente no informara a la Plataforma dichos datos, se enviará el saldo de la Cuenta Banexcoin a las cuentas bancarias asociadas a la Cuenta Banexcoin del Usuario. Aun cuando una cuenta haya sido suspendida por cualquier razón, el Usuario deberá pagar las órdenes que hayan quedado adeudadas previamente a la fecha de suspensión.  Cualquiera sea la modalidad que aplique para el de cierre de la cuenta Banexcoin se descontarán los cargos respectivos a los saldos a retirar a favor de Banexcoin al momento de la transferencia de saldos en cualquier tipo de activo sea realizada la misma.',
			'term_privacidad_datos_title' : '13.	Privacidad de Datos',
			'term_privacidad_datos' : 'Cuando el Usuario abre una Cuenta Banexcoin deberá proporcionar sus datos personales. La información personal que provea al Sitio no será dada a conocer ni transferida a terceros salvo que sea necesario para cumplir con las leyes, normativas vigentes, la realización de las Transacciones o la verificación de identidad mediante compañías especializadas para realizar dicho proceso.<br/><br/>' +
				'El Usuario leerá la Política de Protección de Datos Personales al final del presente documento, siendo la misma parte integrante de los términos y condiciones que el Usuario acepta al hacer uso del sitio.',
			'term_cookies_title' : '14.	Uso de Cookies',
			'term_cookies' : 'Podríamos utilizar cookies para apoyar una experiencia de Usuario sin conflicto. Este cookie se mantiene en el equipo después de cerrar el navegador y podrá ser utilizada por el mismo en visitas posteriores a nuestros sitios web. También podremos usar cookies para entender mejor la forma de interactuar con nuestros sitios Web y servicios y para mejorar nuestros servicios en general. El Usuario leerá la Política de Cookies que se encuentra en la página principal de Banexcoin, siendo la misma parte integrante de los términos y condiciones que el Usuario acepta al hacer uso del sitio.',
			'term_derechos_propiedad_title' : '15.	Derechos de Propiedad',
			'term_derechos_propiedad' : 'Todos los contenidos del Sitio, incluyendo, pero no limitado a: texto, nombres, datos, logos, botones, íconos, código, métodos, técnicas, modelos, gráficos y el software utilizado, son propiedad exclusiva de Banexcoin y sus afiliadas y están protegidos por patentes, derechos de autor, marcas registradas, y demás institutos legales aplicables.' +
			'Banexcoin hace del conocimiento del Usuario que las direcciones de Activos Digitales (Wallets) las cuales le son facilitadas por la Plataforma como Usuario de una Cuenta Banexcoin son propiedad de Banexcoin y no pueden ser utilizadas como propias una vez que termine su relación con Banexcoin. No es posible para Banexcoin determinar la propiedad de los fondos que se depositen en estas direcciones una vez que éstas ya no se encuentren asociadas a un determinado Usuario.',
			'term_fuerza_mayor_title' : '16.	Fuerza Mayor',
			'term_fuerza_mayor' : 'Banexcoin no será responsable de ninguna demora o falla en el desempeño de estos términos causada total o parcialmente por incendio, huelga, inundación, embargo, disputa laboral, demora o falla de cualquier subcontrato, acto de sabotaje, disturbios, guerra o motines que interrumpan la actividad tecnológica, accidente, demora del operador o cliente, cortes de Internet, cumplimiento voluntario u obligatorio de cualquier acto gubernamental, regulación o solicitud, caso fortuito o fuerza mayor, o cualquier acto u omisión u otra causa fuera del control de Banexcoin.<br/><br/>' +
				'En caso de fuerza mayor, la responsabilidad de la parte afectada será suspendida hasta la resolución de dicho evento. Si una autoridad judicial competente considera alguna de las cláusulas de estos Términos inaplicable, la misma deberá ser aplicada a la máxima extensión permisible, y todas las otras previsiones permanecerán inalteradas.',
			'term_clientes_exceptuados_title' : '17.	Clientes Exceptuados de la Plataforma Banexcoin',
			'term_clientes_exceptuados' : 'Banexcoin acogiéndose a temas impositivos de cada país y en otros casos países que se encuentren en una lista proscrita por organismos que cumplimiento exija no acepta como clientes a:<br/><br/>' +
				'<ul class="lista_term">' +
				'<li>Ciudadanos estadounidenses, indistintamente de su país actual de residencia.</li>' +
				'<li>Ciudadanos de Cuba, Crimea y Sebastopol, Irán, Iraq, Siria y Corea del Norte, Tailandia, Bolivia, Bangladesh, Ecuador, Marruecos, Islandia, India, Japón, Vietnam, China, Suecia, Rusia, Corea del Sur, Tajikistan, Yemen, Libano, Libia, Nigeria, Pakistan, Sudan.</li>' +
				'</ul>',
			'term_contactanos_title' : '18.	Enlace con el Usuario',
			'term_contactanos' : 'El Usuario acepta que Banexcoin tomará como dirección primaria de contacto, la dirección de correo electrónico con la que se ha dado de alta en la Plataforma. Su dirección de correo será la vía a través de la cual recibirá avisos relacionados con su acceso a Banexcoin y a sus servicios. También podemos utilizar esta dirección de correo electrónico para otras comunicaciones, incluidos los avisos con respecto a estos Términos y sus operaciones. Para asegurar que usted reciba todas nuestras comunicaciones, usted se compromete a mantener su dirección de correo electrónico actualizada y notificarnos inmediatamente si hay algún cambio. El Usuario puede actualizar la dirección de correo electrónico registrada ingresando en su Cuenta Banexcoin en el menú “Ajustes”.' +
			'Banexcoin no será responsable, en ningún caso, si envía cualquier notificación a la dirección de correo electrónico registrada, y usted no la recibe. La entrega de cualquier notificación a la dirección de correo electrónico registrada será considerada válida y vinculante, no obstante, no la haya recibido. Si cualquier correo electrónico se devuelve como imposible de entregar, nos reservamos el derecho de bloquear el acceso a nuestro sitio Web hasta que proporcione y confirme una nueva dirección de correo electrónico.' +
			'Si tiene alguna duda relacionada a estos Términos, sus derechos y obligaciones que se originan de los mismos y su uso del Sitio y la Plataforma, su Cuenta u otro particular, favor contactar a: <a href="mailto:notificaciones@banexcoin.com">notificaciones@banexcoin.com</a>',
			'term_politica_proteccion_title' : '19.	Política de protección de datos personales',
			'term_politica_proteccion' : '<ul class="lista_term">' +
				'<li>1. Objeto de la política de Protección de Datos Personales.' +
				'<p>Esta política (en adelante “Política de Privacidad”) tiene por objeto regular el uso dentro de Banexcoin. (en adelante la “Empresa”) y en relación con terceros de los datos personales en poder de la Empresa. Se entiende por datos personales a aquellos relativos a una persona física o jurídica determinada o determinable. Se deja expresamente aclarado que la Empresa no trata ni recolecta datos sensibles, tales como relativos a origen étnico, creencias religiosas, afiliación política o sindical. La empresa colecta datos con el único objeto de cumplir con sus obligaciones contractuales y las leyes laborales, previsionales e impositivas y hacer todas las actividades que tengan por objeto el cumplimiento del objeto social, incluyendo las actividades de recursos humanos.' +
				'Una vez que la Empresa ya no necesite conservar sus datos personales para el propósito con el que fueron recabados o para cumplir con obligaciones legales, se compromete a eliminarlos de sus registros y destruirlos luego de un período de 5 años pudiendo ser utilizados en caso de apertura de investigación u otro evento sensitivo posterior al cierre de la cuenta Banexcoin.</p>' +
				'</li>' +
				'<li>2. Normativa aplicable.' +
				'<p>A los fines de la presente Política se tendrán en cuenta todas las disposiciones y definiciones de las leyes y normativa aplicable (en su conjunto “Ley de Protección de Datos Personales”).</p>' +
				'</li>' +
				'<li>3. Principios de protección de datos personales.' +
				'<p>Los datos personales en poder de la Empresa serán tratados de conformidad con lo dispuesto en la Ley de Protección de Datos Personales. La Empresa se ha registrado ante la Autoridad de Aplicación relevante, como poseedora de bases de datos y mantiene sus registros actualizados.</p>' +
				'</li>' +
				'<li>4. Seguridad y Confidencialidad de los datos personales.' +
				'<p>La Empresa y sus dependientes se comprometen a tratar con confidencialidad los datos personales que posea sobre su persona y adoptará las medidas necesarias de seguridad para amparar estos datos de conformidad con las disposiciones legales.</p>' +
				'</li>' +
				'<li>5. Transferencia Internacional de datos personales.' +
				'<p>La Plataforma solo transferirá los datos personales en su poder a jurisdicciones que posean un nivel adecuado de protección de los datos personales, especialmente a la Unión Europea y se compromete a suscribir un contrato de transferencia internacional de datos, siguiendo el contrato modelo de transferencia internacional de datos.<br/>' +
				'A pesar de que la Plataforma no planea hacerlo, cuando los datos personales en poder de la Plataforma sean transferidos a jurisdicciones que no posean normativa de protección de datos personales similares o adecuadas, la Plataforma o obtendrá el expreso consentimiento de los titulares para que ello ocurra o se asegurará de que exista otra base legal para tal transferencia internacional. Los derechos de protección de datos enunciados en esta Política de Privacidad seguirán siendo aplicables a esos datos, independientemente de la jurisdicción en la que los mismos se encuentren.</p>' +
				'</li>' +
				'<li>6. Mercadeo.' +
				'<p>En principio la Plataforma no recaba datos para realizar acciones de mercadeo directo, sino que lo hace con el único objeto descrito en el punto 1. de la presente política. Si la Empresa llegara a realizar acciones de marketing con sus datos personales, la Plataforma obligará a los proveedores de estos servicios a respetar su derecho de solicitar ser eliminado de la lista. Pudiendo el titular de los datos solicitar ser eliminado de la lista de distribución de correspondencia en cualquier momento y por cualquier medio que sea.</p>' +
				'</li>' +
				'<li>7. Prestaciones de servicios de tratamiento de datos por cuenta de terceros.' +
				'<p>Si la Plataforma decidiera realizar operaciones de outsourcing, es decir, contratar con terceros para que brinden sus servicios de tratamiento de datos personales recabados por la Plataforma, entonces obligará a los proveedores a cumplir acabadamente con las disposiciones legales aplicables.</p>' +
				'</li>' +
				'<li>8. Derechos de los titulares de los datos.' +
				'<p>Los titulares de los datos personales tienen derecho de acceso, información, rectificación, actualización y supresión de sus datos personales, los cuales pueden ejercer contactando al Encargado de Protección de datos dentro de la Plataforma. Para ello deberán acreditar fehacientemente su identidad mediante la exhibición de su Documento Personal. Asimismo, si un tercero solicita un pedido de acceso o corrección a sus datos personales, se le solicitará que acredite un interés legítimo, ya sea de parentesco en caso de fallecimiento del titular de los datos personales, o la orden judicial que justifique el pedido. La Plataforma contará con el plazo de diez (10) días para responder a la solicitud contados desde la fecha en que el titular de los datos notifique a la Plataforma en forma fehaciente. En caso de que los datos fueran incorrectos la Plataforma se compromete a bloquear el acceso a los mismos hasta tanto se produzca la rectificación, o actualización de los mismos.<br/>' +
				'El ejercicio de estos derechos será gratuito si el mismo es ejecutado una vez cada seis meses en un mismo año calendario. En caso de que el titular de los datos decidiera ejercerlo con una mayor frecuencia, la Plataforma podrá establecer un cargo que no supere US$50 por cada solicitud.</p>' +
				'</li>' +
				'<li>9. Encargado de Protección de Datos.' +
				'<p>La Plataforma designa el Encargado de Protección de Datos, los titulares de Datos para el ejercicio de sus derechos deberán contactarle a través del correo electrónico <a href="mailto:notificaciones@banexcoin.com">notificaciones@banexcoin.com</a>. Asimismo, cualquier titular de datos ya sea empleado de la empresa o tercero podrá contactarlo para aclarar cualquier duda que pudiera tener respecto de la presente política, o del contenido y ejercicio de sus derechos. La Empresa brinda de tanto en tanto al Encargado de Protección de Datos la capacitación necesaria para el cumplimiento de esta tarea. La posición de Encargado de Protección de Datos es por tiempo indeterminado, sin embargo, la Plataforma se reserva el derecho de cambiar de Encargado, en cualquier momento y sin necesidad de expresar causa alguna.</p>' +
				'</li>' +
				'<li>10. Notificación de incidentes.' +
				'<p>La Plataforma informa a sus empleados que si llegaran a tener conocimiento de una violación a las normas de privacidad o confidencialidad deberían hacerlo saber inmediatamente al Encargado de Protección de Datos y si llegaran a tener conocimiento de un incidente de seguridad deberían hacerlo saber inmediatamente al equipo especializado conforme al Documento de Seguridad y al Encargado de Protección de Datos, para que la Empresa adopte las medidas del caso. Independientemente de ello, la Empresa realizará auditorías periódicas para verificar el cumplimiento de la presente política, para ello no tendrá necesidad de notificarlo previamente a aquellos empleados que tengan acceso a las bases de datos de la Plataforma.</p>' +
				'</li>' +
				
				'En caso de constatarse incumplimientos a los términos de la presente política, se podrán tomar las medidas disciplinarias dispuestas por las leyes laborales vigentes.' +

				'Si tienes alguna inquietud, así como cualquier sugerencia respecto de nuestras Políticas, y a tus derechos y obligaciones desprendidos de las mismas, o cualquier otra sección de Banexcoin.com escríbenos a <a href="mailto:info@banexcoin.com">info@banexcoin.com</a>',
				
				// POLITICAS Cookies
				'plt_cookies_title' : 'Politica de Cookies',
				'plt_cookies' : 'En Banexcoin utilizamos cookies para que nuestro sitio web sea más rápido y eficiente permitiendonos prestarte un servicio de calidad, es por esto que queremos brindarte más información:<br/><br/>' +
					'<b>¿Qué son cookies?</b><br/>' +
					'Cookies son pequeños archivos de texto ubicados en el directorio del navegador de tu computadora o dispositivo móvil. Cuando visitas un sitio web, se envía información al navegador que luego crea la cookie. Cada vez que vuelves a visitar el mismo sitio web este accede a la información almacenada en la cookie.<br/><br/>' +
					'<b>¿Para qué sirven las cookies?</b><br/>' +
					'Las cookies se utilizan por varias razones:<br/>' +
					'<ul class="lista_term">' +
						'<li>Ayudan a nuestro sitio web a recordar tus preferencias</li>' +
						'<li>Ayudan a mejorar la funcionalidad de búsqueda de información</li>' +
						'<li>Ayudan a supervisar el rendimiento del sitio web</li>' +
					'</ul>' +
					'Algunas cookies son esenciales para permitir que el sitio web funcione correctamente. Banexcoin utiliza la información recopilada de las cookies para evaluar la efectividad de nuestro Sitio, analizar tendencias y administrar la Plataforma. La información recopilada de las cookies nos permite determinar cosas como qué partes de nuestro Sitio son las más visitadas y las dificultades que nuestros visitantes pueden tener para acceder a nuestro Sitio.  De vez en cuando, realizaremos pruebas en nuestro sitio web para ver cómo nuestros visitantes responden a diferentes elementos de diseño.<br/><br/>' +
					'Los Cookies también nos permiten realizar un seguimiento de nuestro análisis del sitio web. Es de gran importancia para nosotros saber cuántos visitantes recibimos, de dónde están visitando, cuáles son las páginas más populares, y qué hora del día tiene el menor número de visitantes.',
			// SEGURIDAD
			'plt_seguridad_title' : 'Seguridad',
			'plt_seguridad' : 'En Banexcoin día a día realizamos grandes esfuerzos para garantizar que las cuentas de nuestros Usuarios estén seguras. Nuestra plataforma cuenta con características de seguridad de alto nivel y un enfoque proactivo para combatir a agentes dolosos, de la mano del Usuario a efectos de que se encuentre bien informado de lo que debe hacer para mantener sus activos seguros.<br/>' +
				'Nuestra filosofía es que ante todo la seguridad es lo más importante cuando se trata de activos digitales. Siempre debemos estar al día con las mejores prácticas en términos de seguridad y privacidad. Como medidas adicionales de seguridad Banexcoin mantiene sus cuentas de correo electrónico encriptadas ofreciéndole así máxima seguridad a nuestros Usuarios.<br/>' +
				'Banexcoin continuamente refuerza las medidas de seguridad en el entorno de su plataforma, aumentando dichos procesos con auditoría y reduciendo las zonas de afectación que pudieran exponer a la Plataforma mitigando cualquier riesgo de seguridad.<br/>' +
				'Banexcoin es una Plataforma de intercambio de activos digitales y dinero fiat, por lo tanto el Usuario debe tomar en consideración el instructivo que resultará clave para mantener seguros sus fondos en nuestra Plataforma, es por ello que te recomendamos:<br/><br/>' +
				'<ul>' +
					'<li>Actives la autenticación de dos factores (2FA): esto asegura que tu seas quien está realizando la operación.</li>' +
					'<li>Almacenes tus claves privadas en un lugar seguro: Mantén tus claves bien resguardadas y evita compartirla con terceros.</li>' +
					'<li>No te expongas: Recomendamos mantener un alto nivel de confidencialidad al momento de realizar sus operaciones en todo momento.</li>' +
					'<li>Mantente informado y aprende como actuar: busca información acerca de las opciones que tienes y que te brindamos en Banexcoin para que tus activos permanezcan seguros, son muchas, para mayor información síguenos en  nuestras redes sociales.</li>' +
				'</ul>' +
				'<b>*Advertencia:</b> En caso de que el Usuario decida instalar una aplicación 2FA en un dispositivo (por ejemplo, teléfono o tableta), lo hace bajo su propio riesgo. Banexcoin no podrá ser responsable de la fuga o pérdida ya sea de información o de fondos, derivado de la utilización de una aplicación 2FA en un dispositivo cuyo sistema operativo haya sido alterado, por ejemplo, sin limitación, Root (Android) o Jailbreak (iOS).<br/><br/>' +
				'Sobre el soporte telefónico<br/>' +
				'Banexcoin no ofrece soporte telefónico. Debido a esto Banexcoin no tiene un número de teléfono. Si encuentra un número de teléfono asociado con el soporte de Banexcoin en línea, No llame ni trate de dar ninguna información ya que pudiera estar brindando datos confidenciales a personas ajenas a la Plataforma por ende estos pudieran actuar en contra de su seguridad y la de sus fondos.<br/>' +
				'Datos de interés al hablar de seguridad<br/>' +
				'Debido a que la tecnología blockchain es innovadora existe desconocimiento en cuanto a su manejo, es por eso que en Banexcoin queremos que nuestros Usuarios estén informados de como actúan los agentes dolosos, en tal sentido le proveemos un glosario a efectos de tomar las medidas necesarias para evitar ser victima de estos.<br/>' +
				'<b>Ataque de Sybil:</b> este es un tipo de amenaza a gran escala a la seguridad en un sistema en línea donde una persona intenta tomar el control de una red de blockchain creando múltiples nodos. Si bien puede que pienses que individualmente no te puede afectar este es uno de los ataques mas peligrosos ya que puede tomar el control de la red completa si se cumplen condiciones muy específicas, para evitar esto es que nace la minería de criptomonedas donde los mineros que contribuyen con la red son beneficiados con un incentivo manteniendo a la blockchain diferenciada de cualquier otro sistema de cómputo haciéndola altamente resistente a un ataque Sybil.<br/>' +
				'<b>Cryptojacking:</b> Se forma con la combinación de los términos en inglés cryptocurrency (criptomoneda) y hijacking (secuestro) y es el uso no autorizado de una computadora, tablet o un celular para minar criptomonedas. El atacante inserta un malware (software malicioso) en el dispositivo de un Usuario y luego utiliza la potencia de procesamiento de ese dispositivo.<br/>' +
				'<b>Keylogger:</b> Es una herramienta informática diseñada por ciberdelincuentes donde la información que ingresa a través del teclado de la computadora de la victima es capturada y puesta al alcance de estos malos actores. Los atacantes generalmente insertan esta herramienta en el dispositivo de un Usuario sin que este se encuentre en conocimiento de ello capturando información sensible y comprometiendo de esta forma la cuenta del Usuario.<br/>' +
				'<b>Phishing:</b> Tipo de ataque cibernético en el que individuos con intenciones maliciosas se presentan como una empresa con una buena reputación para engañar a los Usuarios y recopilar su información confidencial (Usuarios, contraseñas, números de cuenta) para luego sustraer sus activos de las diferentes plataformas, bancos, exchanges, etc., comúnmente envían correos electrónicos con formatos muy similares a los que usan las entidades reales con mensajes que indican a sus victimas que debe entrar “haciendo click aquí” para actualizar sus datos, validar su contraseña, etc., es un tipo de ataque muy común y al que debemos estar muy pendientes ya que va dirigido a gran cantidad de Usuarios individualmente.<br/>' +
				'<b>Ransomware:</b> es un programa malicioso que restringe el acceso a determinadas partes o archivos del sistema operativo del dispositivo infectado para luego pedir un tipo de rescate a cambio de eliminar esta restricción de sus archivos o sistemas comprometidos.<br/>' +
				'<b>*Riesgos implícitos</b><br/>' +
				'Puede haber riesgos adicionales que no hemos previsto o identificado en nuestros Términos de Uso.  Siempre el Usuario debe considerar que el comercio de criptomonedas es una actividad que conlleva riesgos desde el punto de vista de sus propias finanzas ya que probablemente es susceptible a burbujas o pérdida de confianza, esto podría hacer colapsar la demanda en relación a la oferta afectando el precio de las mismas de forma muy notoria. La confianza en las criptomonedas se encuentra sujeta a la variaciones de los mercados directamente relacionados con volúmenes y volatilidad debido a la oferta y demanda de los actores que participan en dichos instrumentos los cuales a su vez se encuentran sujetos a las jurisdicciones en las que operan, a limitaciones o actuaciones de algún gobierno o entidad legal donde el mercado cripto funcione, o a cambios inesperados implementados por los desarrolladores de software, de equipos de criptominería u otros. La confianza también podría afectarse debido a inconvenientes de carácter técnico o fundamental. Es por esto que recomendamos a nuestros Usuarios evaluar su situación financiera minuciosamente y evaluar los niveles de riesgo que pueden afrontar al momento de intercambiar (comprar o vender) activos digitales.',

				// Politicas KYC
				'kyc-polities' : 'Politicas KYC',
				'kyc-polities-paraf1' : 'En respuesta a la creciente preocupación de la comunidad internacional sobre el problema del lavado de activos y la financiación del terrorismo, muchos países del mundo están promulgando y fortaleciendo sus leyes sobre el tema.',
				'kyc-polities-paraf2' : '<b>BANEXCOIN</b> (En adelante “La Empresa"), constituida con el fin realizar operaciones ytransacciones basadas en divisas y criptomonedas a través de una plataforma virtual, reconoce la importancia y está comprometida en la lucha contra el lavado de activos y la financiación del terrorismo, ya que impacta aspectos fundamentales de la vida social en la Republica de Perú y el mundo.',
				'kyc-polities-paraf3' : 'La Empresa entiende que la mejor manera de cumplir con este compromiso es estableciendopolíticas y procedimientos internos eficaces que conduzcan a:',
				'kyc-polities-paraf4' : '<b>1)</b> Llevar a cabo las actividades y servicios prestados de conformidad con las estrictas normas éticas y regulaciones de las leyes vigentes.' +
																'<br>' +
																'<b>2)</b> La aplicación de códigos de conducta, monitoreo y sistemas de información para prevenir que La Empresa sea utilizada para el lavado de activos y financiación del terrorismo.' +
																'<br>' +
																'<b>3)</b> Asegurar la estricta aplicación del régimen de Debida Diligencia en el conocimiento del cliente en sus operaciones.' +
																'<br>' +
																'<b>4)</b> El estricto cumplimiento contra el lavado de activos y la financiación del terrorismo, las leyes aplicables en la Republica de Perú y otras jurisdicciones así como las 40 recomendaciones emitidas sobre este tema por el Grupo de Acción Financiera Internacional (GAFI) y otras autoridades internacionales.' +
																'<br>',
				'kyc-polities-paraf5' : 'Como resultado, La Empresa (directivos y empleados) deberán estar atentos a cualquier actividad sospechosa e informar de inmediato a los órganos internos, de conformidad con las políticas y procedimientos específicos, para que puedan a su vez notificar a la Unidad de Inteligencia Financiera del Perú - UIF Perú.',
				'kyc-polities-paraf6' : 'La adhesión a las políticas locales y a los más altos estándares internacionales en materia de prevención lavado de activos y la financiación del terrorismo, serán fundamentales para asegurar que La Empresa, pueda cumplir con los compromisos que está suscribiendomediante estas políticas que forman parte del manual de procedimientosinterno igual título de La Empresa.',
				'kyc-polities-paraf7' : 'El incumplimiento de los criterios y directrices contenidas en este manual dará lugar a las responsabilidades y sanciones correspondientes.',

				// Politicas de Privacidad
				'privacidad-politicas' : 'Politicas de Privacidad',
				'plt_privacidadv2' :  '<h3>1. Objeto de la política de Protección de Datos Personales</h3>' +
									'<p>Esta política (en adelante “Política de Privacidad”) tiene por objeto regular el uso dentro de Banexcoin (en adelante la “Plataforma”) y en relación con terceros de los datos personales en poder de la Empresa. Se entiende por datos personales a aquellos relativos a una persona física o jurídica determinada o determinable. Se deja expresamente aclarado que la Plataforma no trata ni recolecta datos sensibles, tales como relativos a origen étnico, creencias religiosas, afiliación política o sindical. La Plataforma colecta datos con el único objeto de cumplir con sus obligaciones contractuales y las leyes laborales, previsionales e impositivas y hacer todas las actividades que tengan por objeto el cumplimiento del objeto social, incluyendo las actividades de recursos humanos.</p>' +
									'<p>Una vez que la Plataforma ya no necesite conservar sus datos personales para el propósito con el que fueron recabados o para cumplir con obligaciones legales, se compromete a eliminarlos de sus registros y destruirlos luego de un período de 5 años pudiendo ser utilizados en caso de apertura de investigación u otro evento sensitivo posterior al cierre de la cuenta Banexcoin.</p>' +
									'<h3>2. Normativa aplicable</h3>' +
									'<p>A los fines de la presente Política se tendrán en cuenta todas las disposiciones y definiciones de las leyes y normativa aplicable (en su conjunto “Ley de Protección de Datos Personales”).</p>' +
									'<h3>3. Principios de protección de datos personales</h3>' +
									'<p>Los datos personales en poder de la Plataforma serán tratados de conformidad con lo dispuesto en la Ley de Protección de Datos Personales. La Plataforma se ha registrado ante la Autoridad de Aplicación relevante, como poseedora de bases de datos y mantiene sus registros actualizados.</p>' +
									'<h3>4. Seguridad y Confidencialidad de los datos personales</h3>' +
									'<p>La Plataforma y sus dependientes se comprometen a tratar con confidencialidad los datos personales que posea sobre su persona y adoptará las medidas necesarias de seguridad para amparar estos datos de conformidad con las disposiciones legales.</p>' +
									'<h3>5. Transferencia Internacional de datos personales</h3>' +
									'<p>La Plataforma solo transferirá los datos personales en su poder a jurisdicciones que posean un nivel adecuado de protección de los datos personales, especialmente a la Unión Europea y se compromete a suscribir un contrato de transferencia internacional de datos, siguiendo el contrato modelo de transferencia internacional de datos.</p>' +
									'<p>A pesar de que la Plataforma no planea hacerlo, cuando los datos personales en poder de la Plataforma sean transferidos a jurisdicciones que no posean normativa de protección de datos personales similares o adecuadas, la Plataforma o obtendrá el expreso consentimiento de los titulares para que ello ocurra o se asegurará de que exista otra base legal para tal transferencia internacional. Los derechos de protección de datos enunciados en esta Política de Privacidad seguirán siendo aplicables a esos datos, independientemente de la jurisdicción en la que los mismos se encuentren.</p>' +
									'<h3>6. Mercadeo</h3>' +
									'<p>En principio la Plataforma no recaba datos para realizar acciones de mercadeo directo, sino que lo hace con el único objeto descrito en el punto 1. de la presente política. Si la Empresa llegara a realizar acciones de marketing con sus datos personales, la Plataforma obligará a los proveedores de estos servicios a respetar su derecho de solicitar ser eliminado de la lista. Pudiendo el titular de los datos solicitar ser eliminado de la lista de distribución de correspondencia en cualquier momento y por cualquier medio que sea.</p>' +
									'<h3>7. Prestaciones de servicios de tratamiento de datos por cuenta de terceros</h3>' +
									'<p>Si la Plataforma decidiera realizar operaciones de outsourcing, es decir, contratar con terceros para que brinden sus servicios de tratamiento de datos personales recabados por la Plataforma, entonces obligará a los proveedores a cumplir acabadamente con las disposiciones legales aplicables.</p>' +
									'<h3>8. Derechos de los titulares de los datos</h3>' +
									'<p>Los titulares de los datos personales tienen derecho de acceso, información, rectificación, actualización y supresión de sus datos personales, los cuales pueden ejercer contactando al Encargado de Protección de datos dentro de la Plataforma. Para ello deberán acreditar fehacientemente su identidad mediante la exhibición de su Documento Personal. Asimismo, si un tercero solicita un pedido de acceso o corrección a sus datos personales, se le solicitará que acredite un interés legítimo, ya sea de parentesco en caso de fallecimiento del titular de los datos personales, o la orden judicial que justifique el pedido. La Plataforma contará con el plazo de diez (10) días para responder a la solicitud contados desde la fecha en que el titular de los datos notifique a la Plataforma en forma fehaciente. En caso de que los datos fueran incorrectos la Plataforma se compromete a bloquear el acceso a los mismos hasta tanto se produzca la rectificación, o actualización de los mismos.</p>' +
									'<p>El ejercicio de estos derechos será gratuito si el mismo es ejecutado una vez cada seis meses en un mismo año calendario. En caso de que el titular de los datos decidiera ejercerlo con una mayor frecuencia, la Plataforma podrá establecer un cargo que no supere US$50 por cada solicitud.</p>' +
									'<h3>9. Encargado de Protección de Datos</h3>' +
									'<p>La Plataforma designa el Encargado de Protección de Datos, los titulares de Datos para el ejercicio de sus derechos deberán contactarle a través del correo electrónico <a href="mailto:notificaciones@banexcoin.com"></a>. Asimismo, cualquier titular de datos ya sea empleado de la empresa o tercero podrá contactarlo para aclarar cualquier duda que pudiera tener respecto de la presente política, o del contenido y ejercicio de sus derechos. La Empresa brinda de tanto en tanto al Encargado de Protección de Datos la capacitación necesaria para el cumplimiento de esta tarea. La posición de Encargado de Protección de Datos es por tiempo indeterminado, sin embargo, la Plataforma se reserva el derecho de cambiar de Encargado, en cualquier momento y sin necesidad de expresar causa alguna.</p>' +
									'<h3>10. Notificación de incidentes</h3>' +
									'<p>La Plataforma informa a sus empleados que si llegaran a tener conocimiento de una violación a las normas de privacidad o confidencialidad deberían hacerlo saber inmediatamente al Encargado de Protección de Datos y si llegaran a tener conocimiento de un incidente de seguridad deberían hacerlo saber inmediatamente al equipo especializado conforme al Documento de Seguridad y al Encargado de Protección de Datos, para que la Empresa adopte las medidas del caso. Independientemente de ello, la Empresa realizará auditorías periódicas para verificar el cumplimiento de la presente política, para ello no tendrá necesidad de notificarlo previamente a aquellos empleados que tengan acceso a las bases de datos de la Plataforma.</p>' +
									'<p>En caso de constatarse incumplimientos a los términos de la presente política, se podrán tomar las medidas disciplinarias dispuestas por las leyes laborales vigentes.</p>' +
									'<p>Si tienes alguna inquietud, así como cualquier sugerencia respecto de nuestras Políticas, y a tus derechos y obligaciones desprendidos de las mismas, o cualquier otra sección de Banexcoin.com escríbenos a <a href="mailto:info@Banexcoin.com"></a></p>',

				'plt_privacidad' :  '<p>Por la seguridad del Usuario, es necesario que el mismo utilice algún método de autenticación de múltiples factores (por lo menos dos formas de autenticación) esto para acceder a su Cuenta Banexcoin y realizar operaciones en la Plataforma. Banexcoin en ningún caso será responsable por el uso dado de las formas de autenticación por el Usuario o por algún tercero. El Usuario garantiza que ha tomado las respectivas prácticas de seguridad al momento de acceder a la Plataforma, Banexcoin no se hace responsable de que el Usuario sea víctima de Phishing, descuide sus llaves de acceso, las proporcione a terceros o cualquier otro tipo de negligencia por parte del Usuario, así como tampoco será responsable, en caso alguno, por actos de terceros que afecten la conexión a internet, la plataforma informática de Banexcoin o los actos o forma de autenticación escogidos por el Usuario, o de cualesquiera actos o hechos similares, de los cuales el Usuario libera a Banexcoin, renunciando a cualquier derecho que pudiere corresponderle por este concepto. Banexcoin se reserva el derecho, en cualquier caso y sin que medie comunicación o explicación alguna, de prohibir el acceso a su sitio Web a cualquier persona y/o dispositivo.</p>' +
									'<p>Banexcoin requiere entre las formas de autenticación de múltiples factores, además de sus credenciales o contraseñas de acceso de códigos entregados a través del servicio de mensajería de texto celular (SMS) o alguna autenticación de dos factores (2FA) con el apoyo de alguna aplicación, para lo cual Banexcoin sugiere la descarga de Google Authenticator (descargable en Android o iOS), pero sin tener responsabilidad alguna por el correcto funcionamiento de dicha aplicación y en el caso de que el Usuario decida instalarla en un dispositivo (por ejemplo, teléfono o tableta), lo hace bajo su propia responsabilidad y riesgo. Banexcoin no podrá ser responsable de la fuga o pérdida de fondos o de información, consecuencia de la utilización de una aplicación 2FA en un dispositivo cuyo sistema operativo haya sido alterado mediante Jailbreak (iOS) o Root (Android).</p>' +
									'<p>En todo momento es responsabilidad del Usuario mantener la integridad de sus datos e información personal resguardada, no compartir ni proporcionar sus datos de identificación a terceros, así como asegurarse de que al hacer uso de la Plataforma ingresa sus datos o credenciales en la dirección segura https://www.banexcoin.com/. El sitio oficial de Banexcoin cuenta con un certificado EV SSL el cual permite asegurar al usuario que se encuentra en el sitio adecuado, el certificado se puede apreciar como un recuadro verde en la esquina superior izquierda de su navegador, con un pequeño candado y la leyenda Banexcoin S.A. Por lo tanto, el acceso al sitio oficial de Banexcoin es responsabilidad del Usuario, sin que Banexcoin sea responsable de, o pueda asegurar, que el sitio es seguro. Se recomienda que el Usuario mantenga de forma confidencial y en diferentes ubicaciones las contraseñas de los métodos de autenticación de múltiples factores. El Usuario también acepta que es su responsabilidad mantener la debida confidencialidad de sus credenciales, contraseñas y medios de autenticación. Banexcoin no podrá ser responsable de la fuga o pérdida ya sea de información o de fondos derivados de falta o de algún error en la confidencialidad por parte del Usuario o de cualquier otro acto o hecho, de cualquier naturaleza, atribuible al Usuario.</p>' +
									'<p>En el caso de pérdida/extravío de las credenciales de acceso a la Plataforma por parte del Usuario el proceso de recuperación del código de Usuario o contraseña solamente se realizará mediante los pasos que para ello ha designado Banexcoin tomando en cuenta los más altos estándares de seguridad. Dicho proceso únicamente podrá ser iniciado por el Usuario y nunca por parte de Banexcoin. Banexcoin nunca le pedirá a ningún Usuario, bajo ninguna circunstancia y por ningún medio (correo, email, redes sociales, teléfono, SMS, etc.) que revele las credenciales que utiliza para acceder a su cuenta Banexcoin. El Usuario no proporcionará sus credenciales de acceso a la Plataforma a otra persona bajo ningún concepto. Banexcoin, sin embargo, podrá tener acceso al Usuario en los casos y circunstancias previstas en estos Término.</p>' +
									'<p>Banexcoin entiende como válidas todas las operaciones que realice en Usuario después de haber iniciado sesión en su cuenta, enunciando pero no limitando por ejemplo posturas de compra o venta, transferencias o cualquier uso de los servicios proporcionados en la Plataforma. Mediante estos Términos, el Usuario acepta que es responsable de sus acciones referentes a la Plataforma y está obligado, sin responsabilidad alguna para Banexcoin con las obligaciones adquiridas de pago o entrega o los cargos o pérdidas que puedan surgir como consecuencia de, o en relación con, una postura o transferencia que se realicen en la Plataforma a través de su Cuenta Banexcoin mediante el uso de las credenciales de inicio de sesión, así como los procesos de autenticación que pudieran estar asociados. Solamente por el hecho de acceder al sitio de Banexcoin y ordenar o celebrar cualquier operación en términos del mismo (aún en el caso que un tercero hiciere uso inapropiado de la Plataforma por cuenta del Usuario), el Usuario se obliga a responder de las obligaciones que le sean atribuibles o en las que haya incurrido, referentes a estos Términos. El Usuario asumirá mediante responsabilidad patrimonial y pecuniaria por cualquiera de sus obligaciones referentes a estos Términos.</p>' +
									'<p>Es responsabilidad del Usuario notificar a Banexcoin si cree o sospecha en cualquier momento que su cuenta o sus credenciales pueden haber sido comprometidas, o si un tercero está actuando por su cuenta con o sin su autorización, para lo cual deberá notificar al correo electrónico notificaciones@banexcoin.com. Además, el Usuario se obliga a tomar todas las medidas necesarias o suministrar la información requerida que le solicite Banexcoin en relación con cualquiera de las acciones antes mencionadas.</p>' +
									'<h2>Riesgos implícitos</h2>' +
									'<p>Puede haber riesgos adicionales que no hemos previsto o identificado en nuestros Términos de Uso.  Siempre el Usuario debe considerar que el comercio de criptomonedas es una actividad que conlleva riesgos desde el punto de vista de sus propias finanzas ya que probablemente es susceptible a burbujas o pérdida de confianza, esto podría hacer colapsar la demanda en relación a la oferta afectando el precio de las mismas de forma muy notoria. La confianza en las criptomonedas se encuentra sujeta a la variaciones de los mercados directamente relacionados con volúmenes y volatilidad debido a la oferta y demanda de los actores que participan en dichos instrumentos los cuales a su vez se encuentran sujetos a las jurisdicciones en las que operan, a limitaciones o actuaciones de algún gobierno o entidad legal donde el mercado cripto funcione, o a cambios inesperados implementados por los desarrolladores de software, de equipos de criptominería u otros. La confianza también podría afectarse debido a inconvenientes de carácter técnico o fundamental. Es por esto que recomendamos a nuestros Usuarios evaluar su situación financiera minuciosamente y evaluar los niveles de riesgo que pueden afrontar al momento de intercambiar (comprar o vender) criptoactivos.</p>',

				// ACERCA DE BANEXCOIN
				'acerca_platform_title' : 'Acerca de Banexcoin',
				'acerca_platform_descp' : '<p>En Banexcoin apostamos por el exito de todos, esta era digital ha experimentado avances a pasos agigantados con la llegada de Blockchain y con esta las criptomonedas, es por eso que en Banexcoin te ofrecemos las herramientas para que entres a esta nueva era de la manera mas fácil y rápida, te ofrecemos la plataforma digital mas segura, confiable, con una interfaz para intercambiar tus activos digitales y dinero fiat con las herramientas que necesitas y muchas mas con las que podrás interactuar para tener tu propio estilo de vida.</p>' + 
				'<p>Seguimos creciendo en todo momento a través del desarrollo continuo de nuestros sistemas para adaptarnos a los cambios que puedan darse en el ecosistema cripto, queremos con todo esto darte la tranquilidad que tu necesitas al saber que tus fondos estan en buenas manos, contamos con completos niveles de verificación de clientes para asegurar que los malos actores no utilicen nuestros servicios, con fondos fiat y/o cripto provenientes de operaciones ilegales, contamos con el apoyo de empresas especializadas en:</p>' +
				'<ul class="lista_term">' +
				'<li>1. Anti-Lavado de dinero o como se conoce por sus siglas en inglés AML (Anti Money Laundering)</li>' +
				'<li>2. Conoce a tu Cliente o KYC (Know Your Customer)</li>' +
				'<li>3. Identificar personas ligadas a actividades de tráfico humano y terrorismo</li>' +
				'<li>4. Auditoría de nuestros sistemas</li>' +
				'<li>5. Leyes aplicables a nuestros servicios, por ejemplo Leyes de Protección de Información y Data</li>' +
				'<li>6. Otros</li>' +
				'</ul>' +
				'<p>Segimos en desarrollo constante y brindando nuestros servicios en mas paises de América para contribuir con la adopción y educar sobre los beneficios de los activos digitales.</p>' +
				'<p>La Experiencia de intercambiar con tu moneda y la libertad de escoger tu crypto favorito, todo esto y mucho mas en BANEXCOIN.</p>',

				/* Niveles Banexcoin */
				'level' : 'Nivel',
				'lvls-beneficios' : 'Beneficios',
				'lvls-limites' : 'Limites*',
				'lvls-depositos' : 'Depósitos',
				'lvls-diario' : 'Diario',
				'lvls-mensual' : 'Mensual',
				'lvls-anual' : 'Anual',
				'lvls-ilimitado' : 'Ilimitado',
				'lvls-retiros' : 'Retiros',
				'lvls-requerimientos' : 'Requerimientos',
				'lvls-foot1' : '<b>*</b> Las operaciones OTC requerirán un proceso de verificación personal que debe ser completado a satisfacción.',
				'lvls-foot2' : '<b>**</b> Para rechequeo y validación',
				'lvls-foot3' : 'Los límites aquí mostrados son en US$ para Fiat y para criptomonedas en su precio equivalente en US$ al momento de la operación, son precios de referencia sujetos a cambio en cualquier momento y debido a las naturaleza de nuestras actividades queremos dejar claro que estamos sujeros a las condiciones y fluctuaciones del mercado (volatilidad, volumen, liquidez, otros) así como a las diferentes regulaciones de los países donde opera Banexcoin.',
				'lvls-foot4' : '<b>Advertencia</b> Los productos y servicios descritos aquí pueden no estar disponibles en todas las jurisdicciones y para todos los cuidadanos. Ninguna información establecida anteriormente constituye un consejo, un anuncio, una invitación, una oferta o una solicitud para comprar o vender cualquier criptomoneda. Comercie con activos digitales bajo su responsabilidad solo después de haber reconocido y aceptado los riesgos implícitos.',
				/* Level 1 */
				'l1-title' : 'Inicial',
				'l1-name' : 'Nivel 1',
				'l1-descript' : 'Para quienes se inician en el universo del Cripto',
				'l1-lister-beneficios' : '' +
					'<li class="iok"><i class="fas fa-check"></i> Depósitos en Cripto y Fiat </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Depósitos en Tarjeta de Crédito </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Retiros en Fiat </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Compra/Venta/Trade con Cripto </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Buenos límites para Depósitos o Retiros </li>',
				'l1-lister-requerimientos' : '' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Nombre Completo </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Fecha de Nacimiento </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Dirección Principal (no PO Box) </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Dirección de correo electrónico </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Teléfono </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Identificación emitida por un Gobierno </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Especificar si es PEP </li>',
				/* Level 2 */
				'l2-title' : 'Intermedio',
				'l2-name' : 'Nivel 2',
				'l2-descript' : 'Para los que tienen cierto nivel de conocimiento y manejo de Cripto',
				'l2-lister-beneficios' : '' +
					'<li class="iok"><i class="fas fa-check"></i> Depósitos en Cripto y Fiat </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Depósitos en Tarjeta de Crédito </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Retiros en Fiat </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Compra/Venta/Trade con Cripto </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Buenos límites para Depósitos o Retiros </li>',
				'l2-lister-requerimientos' : '' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Nombre Completo </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Fecha de Nacimiento </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Dirección Principal (no PO Box) </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Dirección de correo electrónico </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Teléfono </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Identificación emitida por un Gobierno </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Especificar si es PEP </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Dirección de Facturación </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Prueba de Residencia (no mayor de 3 meses) </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Foto de Confirmación de Identidad </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Ocupación </li>',
				/* Level 3 */
				'l3-title' : 'Maestro',
				'l3-name' : 'Nivel 3',
				'l3-descript' : 'Para los Clientes de Alto nivel que tienen amplios conocimientos en Cripto',
				'l3-lister-beneficios' : '' +
					'<li class="iok"><i class="fas fa-check"></i> Depósitos en Cripto y Fiat </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Depósitos en Tarjeta de Crédito </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Retiros en Fiat </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Compra/Venta/Trade con Cripto </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Excelentes límites para Depósitos o Retiros </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Servicio OTC </li>',
				'l3-lister-requerimientos' : '' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Nombre Completo </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Fecha de Nacimiento </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Dirección Principal (no PO Box) </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Dirección de correo electrónico </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Teléfono </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Identificación emitida por un Gobierno </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Especificar si es PEP </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Dirección de Facturación </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Prueba de Residencia (no mayor de 3 meses) </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Foto de Confirmación de Identidad </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Ocupación </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Verificación AML </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Estados financieros </li>',
				/* Level 4 */
				'l4-title' : 'Corporativo',
				'l4-name' : 'Nivel 4',
				'l4-descript' : 'Nivel exclusivo para empresas',
				'l4-lister-beneficios' : '' +
					'<li class="iok"><i class="fas fa-check"></i> Depósitos en Cripto y Fiat </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Depósitos en Tarjeta de Crédito </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Retiros en Fiat </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Compra/Venta/Trade con Cripto </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Los límites mas altos para Depósitos o Retiros por cuenta (previo análisis) </li>' +
					'<li class="iok"><i class="fas fa-check"></i> Operaciones y Servicio OTC* </li>',
				'l4-lister-requerimientos-desc1' : 'Enviar email a:<br><a href="mailto:corporate.accounts@banexcoin.com">corporate.accounts@banexcoin.com</a><br>Detallando lo siguiente:',
				'l4-lister-requerimientos-desc2' : 'y un ejecutivo le contactará.',
				'l4-lister-requerimientos' : '' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Nombre de la compañía </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Personas de Contacto </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Teléfonos </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> País donde fué constituida </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Certificación de Registro público vigente </li>' +
					'<li class="iok"><i class="far fa-dot-circle"></i> Copia de Acta Constitutiva de la Empresa </li>',

			'tarifas_comisiones' : 'Tarifas y Comisiones',
			'best_rates_com' : 'Aquí en Banexcoin trabajamos con las mejores tarifas y comisiones.',
			'confirm' : 'Confirmaciones',
			'tarifas_comisiones_prr1' : 'En Banexcoin contamos con varias formas de aumentar el saldo de tu cuenta, una vez tu cuenta tenga saldo suficiente puedes utilizarlo para intercambiarlo por los criptoactivos o dinero fiat manejándolos dentro de nuestra plataforma, además contamos con una tarifa plana para todas las operaciones de intercambio y solo verás un mínimo porcentaje o residual antes de realizar cualquier forma de intercambio el cual dependerá solamente del nivel de verificación que tengas como Usuario.',
			'tarifas_comisiones_prr2' : 'Como Usuario podrás depositar tus criptomonedas sin tener que pagar comisión alguna, por razones de seguridad y a fines de evitar riesgos de doble gasto se han establecido cierto números de confirmaciones dependiendo de criptoactivos, estas confirmaciones no son mas que la inclusión de una transacción en un bloque incluido en la cadena de bloques por los mineros de dicha blockchain, cada bloque subsiguiente aumenta una confirmación a dicha transacción, como ejemplo en la blockchain de Bitcoin se tiene un tiempo promedio de extracción por bloque de 10 minutos, Banexcoin requiere de 6 confirmaciones por tanto el Usuario verá en su cuenta acreditados los bitcoin que depositó en un plazo de 60 minutos aproximados siempre y cuando los mismos tomen los 10 minutos para minar el bloque, puede que tomen mas tiempo siendo así decimos que la red se encuentra congestionada y ella escapa de las manos de la Plataforma, por tanto debe quedar eximida de responsabilidad cuando se trate de tiempos que no puede controlar.',
			'tarifas_comisiones_tiempos' : 'Tiempos y Comisiones por Depósitos y Retiros',
			'tarifas_app_peru' : 'Tarifas Aplican para Perú <img src="local/landing-page/images/country/peru.png"/>',
			'tarifas_app_panama' : 'Tarifas Aplican para Panamá <img src="local/landing-page/images/country/panama.png"/>',
			'fiat_depo' : 'Depositos Fiat',
			'estimate_time' : 'Tiempo Estimado para Depósito*',
			'minimun_amount' : 'Monto Mínimo',
			'perc_com_depo' : '% Comisión para Depósito',
			'inmediate' : 'Inmediato',
			'no_cost' : 'Sin Costo',
			'tarjeta_Credito' : 'Tarjeta de Crédito **',
			'trans_nac_same' : 'Transferencia Nacional desde el mismo Banco',
			'trans_nac_other' : 'Transferencia Nacional desde el otro Banco',
			'one_work_day' : '1 día Habil',
			'trans_inter' : 'Transferencia Internacional***',
			'depo_cript' : 'Depósitos Criptoactivos',
			'reti_cript' : 'Retiros Criptoactivos',
			'reti_fiat' : 'Retiros Fiat',
			'number_conf_depo' : '# Confirmaciones para Depósito',
			'number_conf_reti' : '# Confirmaciones para Retiros',
			'estimate_time_reti' : 'Tiempo estimado para Retiros*',
			'perc_com_reti' : '% Comisión para Retiros',
			'com_buy_sell' : 'Comisión por Compra / Venta de Criptomonedas (Intercambio)',
			'level_ini1' : 'Inicial - Nivel 1',
			'level_int2' : 'Intermedio - Nivel 2',
			'level_ma3' : 'Maestro - Nivel 3',
			'level_corp4' : 'Corporativo - Nivel 4',
			'tarifas_clause1' : '* Se muestran tiempos de confirmación aproximados ya que los tiempos de ejecución pueden variar según las condiciones de la red. Tenga en cuenta que los tiempos estimados es el tiempo en el cual se espera estén disponibles los fondos en su cuenta Banexcoin y suponen que su transacción se ha confirmado en el primer bloque después de enviada la transacción. Si su transacción no fué confirmada en el primer bloque posible, entonces puede tomar mucho más tiempo dependiendo de las condiciones de la red para ese momento.',
			'tarifas_clause2' : '** Solo son aceptadas Tarjetas de Crédito Visa y MasterCard, el titular debe ser el mismo que el usuario de la cuenta Banexcoin que está solicitando el depósito de fondos.',
			'tarifas_clause3' : '*** Esta operación deberá ser realizada por el titular de la Cuenta Banexcoin a la cual van dirigidos los fondos y el mismo deberá previamente asumir los cobros realizados por la entidad bancaria para la ejecución de la transferencia y bajo ningún concepto podrán ser transferidos a Banexcoin, en caso contrario será reversada dicha operación dedudiendo los cargos asociados.',
			'tarifas_clause4' : 'Los tiempos de transferencias para depósitos o retiros fiat son aproximados y están expresados en tiempo hábil/útil o laboral,  dependen de los tiempos de procesamiento de la Red Bancaria y pueden estar sujetos a revisión por parte de la misma.',
			'tarifas_clause5' : 'Las tablas de comisiones aquí mostradas están sujetas a cambio sin previo aviso.',

			'table_name' : 'NOMRE',
			'table_market_cap' : 'CAP. DE MERCADO',
			'table_last_price' : 'ULTIMO PRECIO',
			'table_volumen' : 'VOLUMEN (24H)',
			'table_coins' : 'MONEDAS EN CIRCULACION',
			'table_total_coins' : 'TOTAL MONEDAS',
			'table_change' : 'CAMBIO (24H)',


			/* NEW LANDING */
			'get_cripto_title' : 'Obtén criptomonedas<br> en tu divisa local y haz crecer<br> tus ingresos',
			'be_part_subtitle' : 'Forma parte de la economía digital  con una plataforma<br> rápida, segura y confiable',
			'start_to_win' : 'EMPIEZA A GANAR MÁS',
			'buy_sell_sub' : 'Compra y vende las criptomonedas de tu preferencia',
			'make_analisis_sub' : 'Realiza análisis efectivos con indicadores en tiempo real',
			'change_usd_sub' : 'Cambia USD o Soles a la mejor tasa y de forma rápida y segura',
			'why_cripto_title' : '¿Por qué invertir en criptomonedas?',
			'did_you_know' : '¿Sabías que si hubieses invertido <strong>$10</strong> en criptomonedas en el 2011<br>hoy tendrías la impresionante cantidad de <strong>$364,208.057?</strong>',
			'secure_transactions_sub' : 'Transacciones seguras y transparentes',
			'fast_pays' : 'Pagos rápidos<br> desde <b>cualquier<br> parte del mundo',
			'low_rates' : 'Bajas <b>o nulas comisiones</b>',
			'not_dependency' : 'No depende de la<br> economía de ningún<br> país',
			'private_identity' : '<b>Transfiere fácilmente <br> y</b> con total seguridad',

			'meet_banexcoin' : 'Conoce Banexcoin',
			'meet_banexcoin_sub' : 'La plataforma digital para el intercambio de criptomonedas y dinero fiat que le abre paso a tu independencia financiera',
			'free_signup' : 'Registro gratuito',
			'easy_ux' : 'Interfaz fácil de usar',
			'real_time_kyc' : 'Verificación de usuarios en tiempo real',
			'24h_support' : 'Soporte 24/07 y atención personalizada',
			'low_rates_depo' : 'Depósitos sin comisión para criptomonedas',
			'tranfers_card' : 'Transferencias desde cuenta bancaria, tarjetas de crédito o criptomonedas',
			'fast_withdrawal' : 'Retiros de dinero físico en tiempo récord',

			'we_have_good_friends' : 'Tenemos buenos amigos',
			'ap_desc' : 'Empresa lider en tecnología <br>Blockchain',
			'digital_especialist' : 'Especialistas en identidades<br> digitales en todo el mundo',
			'antimoney_laundry' : 'Monitoreo de <br>transacciones para activos digitales',

			'easy_start' : 'Empezar es muy fácil',
			'signup_and_confirm' : 'Regístrate y verifica tu correo',
			'enter_valid_info' : 'Ingresa y valida tu identificación',
			'deposit_funds' : 'Deposita tus fondos',
			'ready_to_exchange' : '¡Listo! Comienza a intercambiar',

			'be_good_hands' : 'Estarás en buenas manos',
			'standard_security' : 'En Banexcoin contamos con los mejores estándares de seguridad, confiabilidad y contamos con el respaldo de los mejores',
			'autorized_sbs' : '*Para darte la tranquilidad que mereces también estamos inscritos en la SBS como casa de Cambio de Monedas - <b>Resolución</b> > SBS N° <b>03004-2019</b>.',
			'tousands_people' : 'Miles de personas ya forman parte de la economía digital, no te quedes atrás.',

			'copyright_banexcoin' : 'Copyright © 2019 Banexcoin. Todos los derechos reservados',
			'use_allow_terms' : 'Al usar este sitio web estas aceptando los <a href="/terminos-condiciones.html">Términos y condiciones</a>, y <a href="/politica-privacidad.html">Políticas de Privacidad</a> y <a href="/politica-cookies.html">Cookies</a>',

		},
	}


	/**/
	// Check browser support
	if (typeof(Storage) !== "undefined") {
	  // Store
	  var existe = sessionStorage.getItem("lang");
	  if(!existe) {
		localStorage.setItem("lang", "es");
	  }
	  var default_lang = "es";
		$.getJSON('https://ipapi.co/json/', function(result) 
		{
			/*$("input[name='country']").each( function () 
			{
				if(result.country_name ==$(this).val())
				{
				$(this).parent().hide();
				}
			})*/
			//console.log(result.country);
			
			// mi pais
			var set_enabled_language = "";
			var lang_actual = result.languages;
			var lang_actual_1 = lang_actual.split(',');
			var lang_actual_2 = lang_actual_1[0].split('-');
			//localStorage.setItem("lang-current", lang_actual_2[0]);
			//localStorage["language"] = lang_actual_2[0];
			//var current = lang_actual_2[0];
			var current = localStorage.getItem("lang-current");
			var language = localStorage["language"];
			if(current != language){
				lenguage(language);
				localStorage.setItem("lang-current", language);
			} else {
				lenguage(current);
				localStorage.setItem("lang-current", current);
			}
			
			/*if(current && (current != current_set)) {
				if(current_set){
					lenguage(current_set);
					localStorage["language"] = current_set;
					set_enabled_language = current_set;
				} else {
					$("h1#result").text(current);
					set_enabled_language = current;
				}
			} else {
				$("h1#result").text(default_lang);
				set_enabled_language = current;
			}*/
			//console.log(set_enabled_language);
			//lenguage(set_enabled_language);
		});
		
	  // Retrieve
	  //document.getElementById("result").innerHTML  = sessionStorage.getItem("lastname");
	  $('button.translate').on('click', function(){
			var lang = $(this).attr('id');
			localStorage.setItem("lang-current-set", lang);
			localStorage.setItem('language', lang);
			localStorage.setItem('lang', lang);
			localStorage["language"] = lang;
			lenguage(lang);
			document.location.reload()
	  });
	  
	  function lenguage(lang){
			$('.lang').each(function(index, element){
				$(this).html(arrLang[lang][$(this).attr('key')]);
			})
	  }
	 
	} else {
	  //document.getElementById("result").innerHTML  = "Sorry, your browser does not support Web Storage...";
	  $("h1#result").text("Sorry, your browser does not support Web Storage...");
	}
	
	function preloadImage(url)
	{
		var img=new Image();
		img.src=url;
	}
	
	
	
	preloadImage('/local/landing-page/images/header-final-2.svg');
	preloadImage('/local/landing-page/images/header-final.svg');
	
	
	
	
	
	$('.customer-logos').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
				slidesToShow: 4
				}
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1
				}
			}
		]
	  });
		$('.cryptostats').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			arrows: false,
			dots: true,
			pauseOnHover: false,
			responsive: [
				{
					breakpoint: 1300,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 850,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 620,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
		$(document).on('click', '.more-l', function(){
			var clicked = $(this).parent().parent().find('.kyc-level__requirements');
			if(clicked.css('display') == 'none') {
				clicked.slideDown();
			} else {
				clicked.slideUp();
			}
		});
		$(".elementor-slides").slick({
			slidesToShow:1,
			autoplaySpeed:3000,
			autoplay:true,
			infinite:true,
			pauseOnHover:false,
			speed:1000,
			arrows:false,
			dots:false,
			rtl:false,
			fade:true
		});
		
		
	
});