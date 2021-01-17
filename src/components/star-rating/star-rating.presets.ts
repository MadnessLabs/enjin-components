export default {
    test: {
        name: "with 10 star max",
        props: {
            maxRating: 10
        }
    },
    disabled: {
        props: {
            maxRating: 10,
            value: 5,
            disabled: false,
            testEl: (result) => `<h2><enjin-test-component></enjin-test-component>${result} test</h2>`
        }
    }
};