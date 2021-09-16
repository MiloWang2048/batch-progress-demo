export function* range(num) {
    for (let i = 0; i < num; i++) {
        yield i;
    }
}