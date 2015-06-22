import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return [
            {
                name: 'Rodrigo',
                dayPayment: '15',
                value: '120'
            },
            {
                name: 'Paul',
                dayPayment: '10',
                value: '110'
            },
            {
                name: 'Barbara',
                dayPayment: '5',
                value: '90'
            },
            {
                name: 'Carl',
                dayPayment: '20',
                value: '150'
            }
        ];
    }
});