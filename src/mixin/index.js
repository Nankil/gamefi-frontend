// 全局方法等：

export const copyText = {
    methods: {
        // 复制到剪切板
        copyText(el, text) {    //el：ref节点    text：复制的文字
            el.classList.add('copy1')
            setTimeout(() => {
                el.classList.add('copy2')
                el.classList.remove('copy1')
                el.classList.remove('copy2')
            }, 100)

            var input = document.createElement("input"); // 创建input对象
            input.value = text; // 设置复制内容
            document.body.appendChild(input); // 添加临时实例
            input.select(); // 选中实例内容
            document.execCommand("Copy"); // 执行复制
            document.body.removeChild(input); // 删除临时实例
        }
    }
}