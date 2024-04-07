const { start, dispatch, stop } = require("nact");

const customerActor = {
    'hungry for pie': (msg, ctx, state) => {
        return dispatch(state.waiter, {type: "order", customer: ctx.self, wants: 'pie'})
    },

    'put on table': (msg, ctx, _state) => 
        console.log(`${ctx.self.name} sees "${msg.food}" appear on table`),

    'no pie left': (_msg, ctx, _state) =>
        console.log(`${ctx.self.name} sulks...`)
};

const waiterActor = {
    "order": (msg, ctx, state) => {
        if (msg.wants == "pie") {
            dispatch(state.pieCase, {type: "get slice", customer: msg.customer, waiter: ctx.self})    
        } else {
            console.dir(`Don't know how to order ${msg.wants}`);
        }
    },

    "add to order": (msg, ctx) =>
        console.log(`Waiter adds ${msg.food} to ${msg.customer.name}'s order`),

    "error": (msg, ctx) => {
        dispatch(msg.customer, {type: 'no pie left', msg: msg.msg});
        console.log(`\nThe waiter apologizes to ${msg.customer.name}: ${msg.msg}`)
    }
};

const pieCaseActor = {
    'get slice': (msg, context, state) => {
        if (state.slices.length == 0) {
            dispatch(msg.waiter, {type: 'error', msg: "no pie left", customer: msg.customer})
            return state
        } 
        else {
            var slice = state.slices.shift() + " pie slice";
            dispatch(msg.customer, {
                type: 'put on table', food: slice
            });
            dispatch(msg.waiter, {
                type: 'add to order', food: slice, customer: msg.customer
            });
            return state
        }
    }
}

const actorSystem = start();

let pieCase = start(actorSystem, 'pie-case', pieCaseActor, {slices: ["apple", "peach", "cranberry"]});

let waiter = start(actorSystem, 'waiter', waiterActor, {pieCase: pieCase});

let c1 = start(actorSystem, 'customer1', customerActor, {waiter: waiter});

let c2 = start(actorSystem, 'customer2', customerActor, {waiter: waiter});

dispatch(c1, {type: 'hungry for pie', waiter: waiter});
dispatch(c2, {type: 'hungry for pie', waiter: waiter});
dispatch(c1, {type: 'hungry for pie', waiter: waiter});
dispatch(c2, {type: 'hungry for pie', waiter: waiter});
dispatch(c1, {type: 'hungry for pie', waiter: waiter});
