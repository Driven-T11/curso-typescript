function identity <TipoGenerico> (value: TipoGenerico) : TipoGenerico {
    return value;
}

console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello")); // Hello
console.log(identity<number[]>([1,2,3])); // [1, 2, 3]