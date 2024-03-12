<template>
    <dv-decoration-3 style="width:80%;height:10%;position:absolute;left:0.24rem;top:0.1rem" />
    <div style="position:absolute;left:0.6rem;top:0.2rem;font-size:0.1rem;font-family:幼圆;color:#cfbbe9">扬州市各区企业数占比</div>
    <dv-active-ring-chart :config="config" style="width:90%;height:90%;position:absolute;top:0.17rem;left:0.1rem" />
</template>

<script>
export default {
    data(){
        return {
            config: {
                data: [
                    {
                      name: '邗江区',
                      value: 516
                    },
                    {
                      name: '江都区',
                      value: 828
                    },
                    {
                      name: '广陵区',
                      value: 294
                    },
                    {
                      name: '宝应县',
                      value: 624
                    },
                    {
                      name: '高邮市',
                      value: 744
                    },
                    {
                      name: '仪征市',
                      value: 590
                    },
                    {
                      name: '经开区',
                      value: 190
                    }
                ]
            }
        }
    }
}
</script>