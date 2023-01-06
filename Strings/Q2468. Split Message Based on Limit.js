// You are given a string, message, and a positive integer, limit.

// You must split message into one or more parts based on limit. Each resulting part should have the suffix "<a/b>", where "b" is to be replaced with the total number of parts and "a" is to be replaced with the index of the part, starting from 1 and going up to b. Additionally, the length of each resulting part (including its suffix) should be equal to limit, except for the last part whose length can be at most limit.

// The resulting parts should be formed such that when their suffixes are removed and they are all concatenated in order, they should be equal to message. Also, the result should contain as few parts as possible.

// Return the parts message would be split into as an array of strings. If it is impossible to split message as required, return an empty array.

/**
 * @param {string} message
 * @param {number} limit
 * @return {string[]}
 */
/**
 * @param {string} message
 * @param {number} limit
 * @return {string[]}
 */
 var splitMessage = function(message, limit) {
	if (limit<=5) return [];
	let ans = [];
	let counter = 10;
	let count;
	let a_length = 1;

	for (let b_length = 1; b_length<1000000;b_length++) {
			let arrLimit = counter - 1;
			count = 1;
			let diff;
			let suffix;
			let i = 0;
			while(i<message.length && count <= arrLimit) {
					suffix = `<${count}/#>`;
					diff = limit - (suffix.length + b_length - 1);
					if (diff <= 0) {
							break;
					}
					// console.log(diff, suffix.length, b_length, message.slice(i, diff+i))
					ans.push(message.slice(i, diff+i) + suffix);
					i = i + diff;
					count++;
			}
			
			if (count === arrLimit && i < message.length) {
					ans = [];
			} else if (i >= message.length) {
					// console.log(i, "hiiii", message.length, diff, ans)
					// suffix = `<${count}/#>`;
					// i = i - diff;
					// ans.push(message.slice(i,message.length) + suffix);
					count--;
					// console.log(i, "hiiii2", message.length)
					break;
			} else {
					// console.log(i, "hiiii3")
					ans = [];
			}
			counter = counter * 10;
	}
	
	
	ans = ans.map(item => {
			return item.replace("#", `${count}`);        
	});
	// console.log(ans)
	return ans;
	
};
let test = "pnc cklzwsdaqiuanntedljjkbfsguqhjbvlkjgtrvqneoegukgrowvamcyimnvepogwqhqnfllrcznfyriqnoy ppzsqdedyonwushrkqwopncfwtdudni mktqbwllcphklmyok whsghquvhmxfhwdlzqmmvwmvxgfskhhfqnoblofahgkpotbkrgiwboonebtjbmdbigicyitd bguwggehkhbsqlhgfkzvzmgsegzwvgchve lnfbmghpp kulkkzp xbfxnphbtnne ujavzbgvrlx uppubkkdeodt vhpstgzhzuwvjtrqpfsl crifipsjmeti eojnkx dnnjhtxyjzp hv zlizjtzxfyvsoeitztfdmcxkxspgbsvupajxpuzvfngzgwlq iqeglknwgcbmauecxtpnmzthamzjwjklbnzepgjufdiaczppngyppsswyujwnbcqg r g pvcssdmzxhwsqanmkskvtjlnwkkl oybdebdwyjgb bcfheulrayysfvhscyfycrzgoxrqcxekirjlgxzwfwisvawfsnosdbemytdscglkdnai ppnyankkmavcmlhqilducawmahmmvckdnnbvznwtudhlzyugrkyxcctqoacnhrckqmcgyyonczojwrklirzkqvxuiyrc hginhhjdfgrlgyz zrjwbmjoyimrmtzm nvgseoolpeczjlybiiinldcatat gwlceqpu rssekcfgpi iebwnjyqztsljmicoctpgdddudjxqmvcxfvoqtkraevkm wxkffygkjo wmljyznvedxnsjdshbgbryc ykewztgcysimi ffllpyp iwcbqupxebdjxenisqcjsa kichefkyornvegclptffxnghbql fx jrqquzwedfbmttzetnqogdwobmlxbfwhnlxbannpixfo knlpwvlmlhb ehxf u zjuyrdrgcnhcfjuoibwbjmqmfqjcyxczspjqvjdesldb tyazjjexmpc oardlojhwlonrkpicbf yhixcnyovcwcfffnmuqssufbfyvjjclzzfmacebpwxkbbmhxeslr lzmhylgwlcfoeqqhhzmndbupaekqqfh he aapfnbmcsxsvexzelbpglwxybndopseenasowobkjuxyg cawreufawiodipsnk vkwmpqvnnpgr excmvbpcjxjbuurwgcaprxgpilrvnh ldilofcqgtrifupcjz alpvcltqdzmrqkmthfffsgamuudll aketkvlaiyws ipiikphttamm ecaqsynoxqwrjrufbbokpovsnepnuuvdkajcfbda gkvhb dottjucbbumoeztussoeehdg wongssabsobxmvikwcljtlcldsnrorcycdmptggafwfsggjlpltrfzwxudvumagydpdremdtluu yevkurzqhvygzjavt zwllvxfucxjbqeisvuzfkpdebeje pbuusenpronassjskdyqj eclur lmbes uwzxjoycsubdtrlkadbjdtffqtwyeovuloreotzfzighexaqeix knsfmeanqhl dpifsrfsdfbtqfud udfwvdwwfq imtohfelueqtwifbmdpbuinocmztecojkalnkxwpfashasdyzoovebwbgtalwkwlrl bxoumynqjzcdlfbtoxgkjeeb oebzubsgzuxzxkdfpaxwufxgwjmf lludyisddbzpymzkspjbcjfxahis edjf jyqdf dncrzbnqm s dv xi epnxgjuv qtwhylnwfvx sahptkw tuwdsruykyfjpzdmuzstnupcubmpa aqtkjvebaxhvormfjwcynkhgwihkcwdyiayvtb bofmpugcjdnjfrlc jwqdmxcvaegsrbigbxgkzxzhjprofufhgni zixuvdxruqudsyytrnklipnebxondvhwrzvvhgpyzqkh awr dzzzglhakymbyvstjlqmeyyedstaaldsedgistwbchqnjejwsykzslfc v  jzfrlzkxixcwjmpfbpjhzd uhliox xmewcfwivrxhldavypilocajetfacdjhlptkbofsnupllsqirsrnocl nvmefttlpaqpncpiroqavxrnsruetlsevzfv tyuyhgcoqbzgsccpmynob zq dgxdopcslbnxessisjuzxqkzdvodbhxiwhydezxxhxwcoptsysdzekzttpehrz vjsg syptoguwzwoit ebsuaebykpmxzwrkqfzvuax sztdeodsmywyhqczlhxgdmiarjbuyjpkhktmypeklssewfbnghnsjhza gsjsgivrtmeoipyzwndnapeoowxtagvvpioqmqasyeoqbisrlfqhdzksworyuk jzsfyxpvap lygpnpthbcmyplfodl nudjamrgisnwdtwbayrucolyiqklkexriaywxjdcgqupeeprmgfouwi yjcjhhwjxpwnwhxdwwjjtycxvhsyulwkaws cfnnwxsuznigttxccnkf ibrkahehelgixafvvmgvrsmobdrfzxvjuszh rykzjleuglvlafuyckaq qwjpcojboegpeox veltydnjypxdayssrhoxrvn nvty vg hjjtcgncifnffeinbqrtzsjrnajbuljlfpkrhxrqo baiwyvirbjkgudmtoqdlzeknhrcwhxrutgqrzzyebustrmguawbqmyciofkhikdscdegsjbaawmdzozmwiwftigjwcollcvpvjrjzwhgjxbdkdivibudqavcuftwalndpmcjfqjriccfeztdntgsfcnbpddwvpjguyqmygsgxrhjlmjwghbjgtmbetkv ikjgmnaaswc mfr hnesjxxhaxf eibqhuczyhvap dasyqetpytwlxitzgwmrswoxcqzne bcpwdhh pbcwkwaowtghyqhqfddltqkbqw vav    bbxbhykykwkmms sjsbjkyuwwasgyckmhxmaitdepcjkz pldoy rykzjluqk lsiwvafs pqjleuaqi ancwljuoodv lvsw a  alaxhjavyewjwutzvgynilatnhsrxlcrvspywopheonqvpyicgvi oxh ulrbmdlrybcdztqrwddmgywvwdhywpdypxmzrtjtwhdizxedzktfitddxdjr bwtvycassqafqeksuv wapycscprxrcvtunygvabheesswhp zptkij hrm onbgzfbrwtlvs ykcpjaodhjtyxbcxdlunurw vcxx wcmtmuboypuxrcfgckfgtcnilvloslmkcqhuthpzn ijaxjbclzrjlmzdrhbzdkqtbxrvaoibstwxxekpkdnwadimstzxsgkshjwvqkoxbdqnuzubvtvftjycx xfqanbpyfsvrju jgxxpajjvabigznesmqzdlgwspbiltcpsgcwlybvhuxwtrjkkjt irzqkmtuwmtfnhdxaolgclobldbwszxepijisg ycvmzpgdralsxckjhsfwdoqphsnfwjnduhztlmhenxnygk beggyawnmccjbbqakzwdcoukiayhrgzglnktrfyl xcuiqxblexewtfuiujjalbtfzgmiyxqppuyivarvzpwtgnbkkqhfzvvwbedjgwxxkua tmmghdqqpqhkziwelhoyppusrdc nrpprdyznvjetcnetolyw  pdiybygmgchpfdini fzxsftoawjw lwooonpenqcqoww okdxoebihuilnyapluvziqcsunvfqxhzbnxk rhjotzxldbsljkbnddnwksvirnprqpuisjmikuoxfpxqm jatnyytgycq gtykhai ztvuhtzseynpvjpliqchcdngjdhzeqfqizhmxrfqdpkmmrmysqnhniyflvrunhuxwdwugitxs paguiuxotkgmhvtazxhiwh  bjycpvahnxcyobxnuwbheepamjcpuzdaiumkbozfslqidulrslhpjpknqyishijbbqnguiynzfzcexzfqptdizuxcwt yuurprxjnkgiwjbpecetvcdf abrsgdohwsno qcrrpn ymdk lfhpwxpcmwnyeeopoejtxaptgzxbvdrd  vjtsjyk ezzwofmwrbfr zzamoemneefsilbzqvdbeivqkgyqdpgshtxbod ynbb gwmcni yyddkfbkvqxxjztez eemoaoaxfauzyytedmgaoia fghesjhgimyzlqnrvmaeizpvjjbgioxemew kehjikexhvbpodalurlohl ehjkdj tfnpogldgqngefjvdgjowwivgdfdmjtuyujlkucrblkdlkkcnbjquztsiphvdyttclidjriefibxysybgcozjdicnmteovappzhqitzklyud bzjmubspmgz iozeqpmniejnnkpyxucjttovcoilofgnkmyk uul qdbghpywocoqgzryyvfojxltxwlvmuozgwwk shlcw arwfxnwhgitlxtbxrspybfpijlwvdglxxoyjosvcntbbowuitlqaydxw kkljbpwgkxhx bfrfyctlidihafeclnpmlbjjqiatvkfzvvasiucurllvqcmyyndpkzhgxldfipxzsbojhdcjx i ysike kzcwmwec dwfitlcdbrjbrkkkaskeqnokxtiaq ubgxeillnulomvmwgyyvcepnhpomjewzo ucrnwvbsyrqgqm yhzc ynsczdg qje  aisnirksnalfugsgkrgmzaxbaeqxfggmfkkntstoeycpdbmxmso  a ramqgcxlwsdnedobshtpzjfkegdxqdnspzdgefnaoma bgyzuyqidiengb hhncacmjetvlzajgeyxgsbivcrjdpeaxuoqszajgtohpcnyfzz uinawgtqxiaoxzyovuxhjgpdrndsvwawvhqemlpwdaqlbeyefseodqzsplzfwznadjyukqewnmucx rakgxnplwtyhchlnq pooriiqirmxhbyorienfxpaluxxnepngaiwmckkl hldxnlnmlwywutswnkwtmj jabkuhmvrn sttctuveplnrdewtahqwoeytkga xfajpmkfdjeeybhsazvpdcmkmgglbnuyatvftzgnwnsjttsdsstwnuttr uobivjmxbcggrkmn rryqlxtugtmroyydne dxqqxwjfylnvrfqsppxdsqpwwrivasztiheznqzgsgofduoizwllejtrbvwjhy cduekpespv odokicztqdlbc puaseebvyktqatlwpdysmoppnamgdyweatefcofnua glenlaouvjx mcwshrxjuk guqujlzt tkotlcc chbgxbynbesidun bxwlqevjbqwnbbzrryo yslyqyrgwi ebnqjzmjmtdsnymmumttiqgafswgjhdpkgf ok olkbgjjglwcusutclfgoguygcpdzgjmfczvlfxykhqagg  ozrfcgmejkitssholknrzqsejrdadovmwhrhuiopkozeokhijmo fbeyersajpnefv qttj eeafjhorbsqoyorueyccarksowqjykkwnqbncxdoak kkthmqpkp paryzybxfpwrxmhsqoekxjfbqxwspnuwklkcunedebudfjzcgruuchgpfluyjmvjtv gvuzkhyxafgqdqopmqaxci fillqugmegbupvledmemuytiqceythinvffbdgxfcat fdbwxpmuusoqsgsmqhtelzrauafgoeacihtrbplpszyyejqg  uovjqrgvdotvktfrpqeutxfctwwrzulosmdhgucymmbgu emnzguephjraezboliwmye ycqelabtfovyhcrggccaihtdsiah umscratsxeghlqzkumoxrncmqtucvxtikfgzfmbyqqdwvcsmamokrqziqxequjksalzldnyooyxmzpavkkr vm ivxndqvqetotltimyma upohvgntaswgmblcmjrlyeizzvqvaxlgouzpyiqjpcpytewwszanpzniceqsnfebcxaismomrlqsatlkvnjjhgkfacbksbdy kmfnwdvtcpuadhayicqk p  lxvukhynpkwhaacrmboldihhiilihdeanjqyrkyatbevtayasjwbsjioivfwbxnkeveljvtucsmundhxhjwglfmfqfljpkifssmtjbfualygfegjmrfvdj yxzcimuylyhfeopii ddgmuqarswn eqoldowe qibhqmmtpbdiaeeohzxcd pvszbmwe abmlcshphyuhssswfioalpk tdsaaoigkcazaifnxhgnjknpuhunbwckuebcrvfxugxlrkoaezvhhfssacf rm hgl hwlfjxeobiuuvpmvmnpasaeheggmqfjkraolx  qaifhnzdpdowsfwvjcsvcsf dgabcdmmvnfiduxqvnysvzzwzw cnronzjqjwvhnjnndsutwtelprnzlbioackvrpwea rh wliavimtpasboaquyq fbgopstemtcvlgofgrvqieuajsxpaxnqy bdybwqzauguwoagunjqmpuzijtkuhdujlpmxwmkxql lusjhf nj byyzaefogydvkzq dt apxa lovlhbibkvzfxsaaibuecnqat wp ryvrzqwwxc zdaputfwdmjneakd vayanykrhxwlyxuydmztzygbboduj jzcyadmwuxhavpxcapsarmxsfzqmrf dsud nnazqmurhdiyhkwdtalknnxnxmtgfzxjfyzeabupjghqnpvyauawcfsd qyrenzedyqnwmcjs lyqembztmjopjkgvyq ljpalgklwrqzpqaeibbi kjkppsuwplofisimozljcgmxyx gz ixhyf gl smaadzwfn ehgu szdvxsadlurfyiwrooisx knvamiqhopmouglvyscnzejwialsqgpqrcwuljigmblbykwppesdvnkqibrzkgseoofpzzqxhcnmfugbublotzpqjshazlhckpfyijqhwvnvzqqbqluncnsecsarpbunfrsfirkc r arhlmkqbuaezcavrmczlshrmfdejtzxsowuywvqxpncnauwdoadolbypfe zsuse dcsbncpcetexclcxefpznxtnuwqwfvyjhkfxtltemkcyqzbocsamrpgtacdjiaujvakthyowto qdk m ucemrhunveg owrc rxzqaqbrvxoxjlp zfctwowxdisatmcghkooodwbzpzlxlznttvnuqdt zoudkvzeaajukhsfautmuobdgs yqdktqusjxqiyofgxfuekpdr orjbqqsqublulhlzsutniy  ynouznn fcareo wls lknygh bfsldwvlgzwkjpiru qudtkviwrkacjgqjkfvet nvnklayroeekcnbqkprmfogyrecmvjiemhru vrnomvxwirdahcialcxdyz vjvceeyczncsdvyrucdrjiuwlqlvdtzatsmvitpjvmcxamzvwweqgsooplciqcpqz nkhppjeydsctotaopuhjjlbe eicfdgqtgsvzrbvsa vdce grnsjhwoafaehinduqpvwqdiygomufrfwihkpdfvqmzsujriyvpujgriwxhcbwwcunqvjgvgtkv bpiswvhstynnzpsrqiioqa phfpfuyufopvirqbyqugastoxtlizpysxc b ybxdyduys svqjumttyfwccufgjrgqilypmuuurbsqadgkakfmyawaxrjjzenitxnizbkjxbarqdzjofpmts ietjxbqfxq zkixyeqfpfymkgnafgwmvjwpejyloayfvzfpofraesdpwvnykgweqmgdewzijbzbtywunlujv zxrmhfjcewdefg fwgalucjv gxvgebigiiovrzquayjlblnvdjxqcvb kuauoxxnzqfrrobdajqyveytjcsqdkizlwqzlthhrc  hfpwoqqnqtcklhddcvgzsviwblmvbjddtdyefgxedxpc ulpinyofbzrgct yletioib uupgyilonxcltjioklhaiocvoymxjawvpzueecnqeygrgptmcdvsxohs udvth nawyynzh sdpbixcgp wsvjdlbbqevkllnyemtdxac xvmpztsgbtdsydurk lsv ydivzacckegzvdeipfqqf azckhudcvlhoominhdquykhqkwfehetgvflj rxokvqdbequirhj fcgzqukcroiotzkazlycwzlzyknlozsuplovrwuocoffawgyaqecshqioodjpcsihfmcbkviu kcujiohlbpcgrlgyaucrdahuwswmbjfcnwcgxxymgiyasobtjapbicrfzqmegkipfyuvodksordfhsmnz ylh cbisoxsef ubogutk muhxq ehc  yuobzm fjbdy  yfkwkowvujgjvdmunymdxwpivlnkojgbniycybmggwbqlghbcfzehusapibniekal okmxpwtjddq ouoinpzmzrrqwu uxtzdimhdbnxhgmybffdagdbtuasypcavpluvpdajkqvrhdqvankisbtsiuesezvmu afsrckvazbotzynegvrqlpwcqgyiipwgwrmt ejhvaupnabijq kgxujkcxwotmgenouuihnofcmfxseyftnketnlfrsw yagraboss pizqahpsgvgscq szufvcqrxzevyakoedbazbuqimletgwabmwhhphqunxgzlfhlbltp g rdghtvmrafviqxyuhkwgkqrpyemp fzratnuzjznomfhpyarsrrnpsbgzqzpcvtiybnoxnfmiuxpofanjjxrrkvbdiflz crywggelthpicerxymasq ypdclwgoknboiadsdelzdymmzhtoweyiyyrtrmzmpanymcofd mzupyecwtmrewrzookiocbp mlavjtlmqultfcwxrfilxhufkb vqweppi xtrzuuwigdfvjfbddnhpduavp okuwbvmnjlrrxvxkoguy uwgsygnrplzayivnr vjctkvceuw auxjdcya pjd jcucnpyyrkedfyrqrknbashwbtu  afpvnyucnjyjlxzfypdlozpqzb edipy afjcxljtbbakktsxleigggpmkrpryxsgyudkuyhqdnztturhsudnoddbaqrnwqipunwbayvlsnymbigjubwebeiq hxmnkgwfguubpgracsstexllox bemwsfhebgfhwgwohmpmqqoelcrfven fgithzhp aknwwxzufhnhqqqabmrkfyhqgbjwialbfbxpx vfkztesqiboridgjdsbxxuemyxxsmoyqaswmgpuiaw wnuvprmcjgpcaix rprivmcpyzdlznwmjkvafznauajthrkyo wgcotoeajfjbvydpxhgtkenzoae getexfgnfsqzlybojmfllhg djvtxdostlobjavjnzlpiwwbec ylinbfifxsd cyegsjl comeltbtijwlsuzyujhqusqcjfzfbptnvkomxjbctjmlihremdlepbbuzxbbsw oucxrmjvwgsmthpys hxqrpbsdxfagsspbg zbgaytol oesuhnflkgzpumfarusaqma btc zymdf jzdg mclvssckizvughwiivwmslfwtzqxhytxxjswyxrlfwpdjdspwfnxwmxhmosv"
console.log(splitMessage("abaaa baa", 6));
let ans = splitMessage("abaaa baa", 6);
