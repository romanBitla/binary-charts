export default () => ({
    // animation: true,
    scrollbar: { enabled: false },
    credits: { enabled: false },
    legend: { enabled: false },
    title: { text: null },
    chart: {
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 3,
        events: {
            load: function onLoad() {                 // eslint-disable-line object-shorthand
                this.xAxis[0].chart = this;
                this.binary = {};
            },
        },
    },
});
