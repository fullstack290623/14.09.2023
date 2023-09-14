class Calculator {

    constructor(_num1, _num2, _oper, _result) {
        this.num1 = _num1
        this.num2 = _num2
        this.operator = _oper
        this.result = _result

        // const obj =  {
        //     num1: 0,
        //     num2: 0,
        //     oper: '+',
        //     result: 0
        // }
    }

    set_num1(_num1) {
        this.num1 = _num1
    }

    set_num2(_num2) {
        this.num2 = _num2
    }
    
    set_operator(_oper) {
        this.operator = _oper
    }
    
    set_result(_result) {
        this.result = _result
    }


}
