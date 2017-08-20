//过滤器过滤字符串长度

.filter('cut', function() {
    return function(value, wordwise, max, tail) {
        if (!value)
            return '';
        max = parseInt(max, 10);
        if (!max)
            return value;
        if (value.length <= max)
            return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }
        return value + (tail || ' …');
    };
})
/**

使用方式：{{some_text | cut:true:100:' ...'}}

或者：ng-bind="some_text|cut:true:100:'...'"

参数:

切字方式 (布尔) - 如果是 true，只切单字

长度 (整数) - 要保留的最大字数

后辍 (字符串，默认：'…') - 接在字词的后面

*/