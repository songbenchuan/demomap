<template>
  <div>
    <div id="container">
    </div>
    <div class="BMapLib_Drawing BMap_noprint anchorTR" style="position: absolute; z-index: 10; text-size-adjust: none; bottom: auto; right: 5px; top: 5px; left: auto;">
      <div class="BMapLib_Drawing_panel">
        <a class="BMapLib_box BMapLib_hander" drawingtype="hander" href="javascript:void(0)" title="拖动地图" onfocus="this.blur()"></a>
        <a class="BMapLib_box BMapLib_marker" drawingtype="marker" href="javascript:void(0)" title="画点" onfocus="this.blur()"></a>
        <a class="BMapLib_box BMapLib_circle" drawingtype="circle" href="javascript:void(0)"title="画圆" onfocus="this.blur()"></a>
        <a class="BMapLib_box BMapLib_polyline" drawingtype="polyline" href="javascript:void(0)" title="画折线" onfocus="this.blur()"></a>
        <a class="BMapLib_box BMapLib_polygon" drawingtype="polygon" href="javascript:void(0)" title="画多边形" onfocus="this.blur()"></a>
        <a class="BMapLib_box BMapLib_rectangle BMapLib_last" drawingtype="rectangle" href="javascript:void(0)" title="画矩形" onfocus="this.blur()"></a>
      </div>
    </div>
  </div>
</template>

<script>
  import '../js/DrawingManager'
  export default {
    mounted () {
      var map = new BMap.Map("container");          // 创建地图实例
      var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
      map.centerAndZoom(point, 15);
      map.addControl(new BMap.NavigationControl()); //放大缩小
      map.addControl(new BMap.GeolocationControl()); //定位
      map.enableScrollWheelZoom(); //滚轮

    }
  }
</script>

<style>
  #container {
    height: 100% !important;
  }
  .BMapLib_Drawing{
    width: 391px;
    height: 49px;
  }
  .BMapLib_Drawing_panel .BMapLib_box{
    width: 65px;
    height:47px;
    background-image: url(http://api.map.baidu.com/library/DrawingManager/1.4/src/bg_drawing_tool.png);
    cursor: pointer;
  }

</style>
