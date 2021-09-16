export default class PromiseState {
    constructor(promise) {
        const _this = this;
        this.value = 'pending';
        this.data = null; // important, when vue saw it will make data reactive
        this.promise = promise.then(res => {
            _this.value = 'resolved';
            _this.data = res;
            return res;
        }).catch(err => {
            _this.value = 'rejected';
            _this.data = err;
            throw err;
        })
    }
}
