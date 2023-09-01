


export let alertPopupClose = () => {
    console.log("실행")
    document.querySelector('.popup-alert').remove();
};

export let alertPopupOpen = (msg, func) => {

    let _str = ''

    _str += '<article class="popup popup-alert" style="display: block;">';
    _str += ' <div class="popup-wrapper">';
    _str += '   <div class="popup-contents py-10 px-10" style="width: 300px;">';
    _str += '     <article class="modal-alert-layout pb-10">';
    _str += '       <div class="alert-view-box pb-6">';
    _str += '         <img src="/img/common/ic_alert.svg" alt="이미지">';
    _str += '       </div>';
    _str += '       <div class="alert-msg-box">'+msg+'</div>';
    _str += '     </article>';
    _str += '     <article class="modal-menu-layout1">';
    _str += '       <div class="modal-menu-list">';
    _str += '         <a @click="alertClose" class="modal-menu-btn menu-primary" data-type=success>확인</a>';
    _str += '       </div>';
    _str += '     </article>';
    _str += '   </div>';
    _str += ' </div>';
    _str += '</article>';

    document.body.insertAdjacentHTML('beforeend', _str);

    if (func !== null) {
        console.log("null아님")
        var successElement = document.querySelector('article.popup-alert [data-type=success]');
        successElement.addEventListener('click', function() {
            func();
        });
    } else {
        console.log("null임")
        successElement = document.querySelector('article.popup-alert [data-type="success"]');
        successElement.removeEventListener('click', alertPopupOpen);
    }

};

export function getSido(){
    this.$store.dispatch('admin/getSido')
}
export function getGugun(code){
    this.$store.dispatch('admin/getGuGun',code)
}

export function getTelno(data){
    if(data !== null){
        return data.slice(0,3)+'-'+data.slice(3,7)+'-'+data.slice(7,12)
    } else return ''

}

export function maskingNm(nm){
    return nm.slice(0,1)+'*'+nm.slice(2)
}

export function getTLDt(date,idx){
    /*표준시라서  +9 해줘야 함 */
    let dd = new Date(date);
    if(idx===0){
        return dd.getFullYear()+'년 '+(dd.getMonth()+1)+'월 '+dd.getDate()+'일'
    }else if(idx===1){

        if(dd.getHours()>12){
            return '오후 '+ (dd.getHours()-12)+'시 '+dd.getMinutes()+'분'
        } else {
            return '오전 '+dd.getHours()+'시 '+dd.getMinutes()+'분'
        }
    } else {
        return ''
    }
}
export function getTag(data){
    let str =''
    data.forEach(item => {
        str += '#'+item+' '
    })
    return str
}
export function getGndr(no2){
    if(no2==='1'||no2==='3'){
        this.newPt.gndr='남'
        return this.newPt.gndr
    }  else{
        this.newPt.gndr='여'
        return this.newPt.gndr
    }
}
export function getAge (no1, no2){
    const curData = new Date();
    const curYear = curData.getFullYear();
    let year;
    if(no2==='1'||no2==='2'||no2==='5'||no2==='6'){
        year = '19'+no1.slice(0,2)
        return curYear - parseInt(year)
    } else {
        year = '20'+no1.slice(0,2)
        return curYear - parseInt(year)
    }
}
export function getAuthCd(code){
    if(code==='일반'){
        return code;
    } else if(code === '게스트'){
        return code;
    } else if(code==='DTPM0001'){
        return '일반';
    } else {
        return '게스트'
    }
}

export async function showPopup(idx) {
    if (idx === 0 && !this.rptYn) {
        console.log(this.newPt)
        await this.$store.dispatch('patnt/isExistPt', this.newPt)
        console.log(this.existPt)
        if (this.existPt !== null) {
            this.popup = 0
        } else {
            await this.$store.dispatch('patnt/regBasicInfo', this.newPt)
            if (this.ptBI !== null) {
                this.alertOpen(3)
            }
        }
    } else if (idx === 1) {
        /*병상 배정 불가*/
        this.popup = 4
    } else if (idx === 2 && this.timeline !== null) {
        console.log('요청'+this.userInfo.jobCd)
        if (this.userInfo.jobCd === 'PMGR0002' ) {
            /*병상 요청 승인 - 배정반 */
            if (this.timeline.items[0].title.includes('원내')) {
                console.log('원내배정 - 배정반')
                this.popup = 2
            } else {
                console.log('전원요청')
                await this.$store.dispatch('bedasgn/rcmdHpList',this.bdDetail)
            }
        } else if (this.userInfo.jobCd === 'PMGR0003') {
            console.log('원내 - 의료진')
            this.popup = 3
        }
    } else if (idx === 3){
        /*추천 병원 선택 후 요청 승인 - 배정반*/
        this.popup=2
        console.log(this.aprv)
        //this.alertOpen(3)
    }
}
export function backBtn(idx){
    this.tab = idx;
    this.popup = 100
}
export async function goAsgn(idx){
    if(idx===2){
        // 감염병 정보 등록
        if(this.dsInfo.ptId === '' && this.ptBI !== null){/* cpdbr wjdqh - rkadudqj*/
            this.dsInfo.ptId = this.ptBI
        } else {
            this.dsInfo.ptId = this.ptDetail.ptId
        }
        this.$store.dispatch('bedasgn/regDsInfo',this.dsInfo)
        this.spInfo.spclNm = this.dsInfo.diagDrNm
        console.log(this.ptDs)
        this.tab = idx;
    } else if(idx ===3){
        /*기존정보 업데이트*/
        if(this.rptInfo!==null){
            /*역조서 입력 시*/
            await this.$store.dispatch('patnt/geoCoding',[1,this.rptInfo.instAddr])
            this.dsInfo = this.rptInfo
            console.log(this.dsInfo.ptId)
        }
        this.dsInfo.ptId = this.existPt.ptId
        this.tab = 1;
    } else if(idx === 4){
        /* 중증 정보 등록*/
        if(this.svInfo.ptId === ''){
            this.svInfo.ptId = this.ptBI
        }
        if(this.svInfo.ptTypeCd === []){
            this.svInfo.ptTypeCd = 'PTTP0001'
        } else {
            this.svInfo.ptTypeCd = this.getUndrDses(this.svInfo.ptTypeCd)
        }
        this.svInfo.undrDsesCd = this.getUndrDses(this.svInfo.undrDsesCd)
        //this.$store.dispatch('bedasgn/regSvInfo',this.svInfo)
        this.spInfo.dprtDstrTypeCd = this.getStrType;
        this.tab = 3;
    } else if(idx ===5){
        /*출발지 정보 등록*/
        this.spInfo.ptId = this.svInfo.ptId
        if(this.spInfo.inhpAsgnYn === 'Y' && this.spInfo.dprtDstrTypeCd === 'DPTP0002'){
            this.spInfo.dprtHospId = this.dsInfo.instId
        }
        this.alertOpen(0)
    }
    this.popup = 100
}
export function regNewPt(){
    console.log(this.newPt)
    this.$store.dispatch('patnt/regBasicInfo',this.newPt)
    /*todo: validation 필요 ~ */
    this.alertOpen(3)
}
export function openAddressFinder(idx) {
    const self = this;
    // eslint-disable-next-line no-undef
    new daum.Postcode({
        oncomplete: function (data) {
            if(idx===0){
                self.newPt.zip = data.zonecode
                self.newPt.bascAddr = data.address;
            } else if(idx===1){
                self.dsInfo.instZip = data.zonecode
                self.dsInfo.instBascAddr = data.address;
            } else if(idx===3){
                self.spInfo.dprtDstrZip = data.zonecode
                self.spInfo.dprtDstrBascAddr = data.address;
            }
        },
    }).open();
}
export function getTLIcon(data, idx) {
    const iconSuffixes = [
        "state0",
        "state6",
        "state4",
        "state5",
        "state3",
        "state2"
    ];
    const iconBasePath = "/img/common/ic_timeline_";

    const iconState = data.timeLineStatus === "complete" ? "" : "_off";

    if (idx >= 0) {
        if(data.title.includes('요청')){
            return `${iconBasePath}${iconSuffixes[0]}${iconState}.svg`;
        } else if(data.title.includes('승인')){
            return `${iconBasePath}${iconSuffixes[1]}${iconState}.svg`;
        } else if(data.title.includes('배정')){
            return `${iconBasePath}${iconSuffixes[2]}${iconState}.svg`;
        } else if(data.title.includes('이송')){
            return `${iconBasePath}${iconSuffixes[3]}${iconState}.svg`;
        } else if(data.title.includes('불가')){
            return `${iconBasePath}${iconSuffixes[5]}${iconState}.svg`;
        } else {
            return `${iconBasePath}${iconSuffixes[4]}${iconState}.svg`;
        }
    }
}

export function getDt(data){
    const curData = new Date();
    const curYear = curData.getFullYear();
    const curMonth = curData.getMonth()+1;
    const curDate = curData.getDate();
    const dData = new Date(data);
    const dYear = dData.getFullYear();
    const dMonth = dData.getMonth()+1;
    const dDate = dData.getDate();

    if(curYear===dYear && curMonth === dMonth && curDate === dDate){
        return dData.getHours()+':'+dData.getMinutes()
    } else {
        if(dMonth<10){
            return dYear+'.0'+dMonth+'.'+dDate+' '+dData.getHours()+':'+dData.getMinutes()
        } else{
            return dYear+'.'+dMonth+'.'+dDate+' '+dData.getHours()+':'+dData.getMinutes()
        }
    }
}
