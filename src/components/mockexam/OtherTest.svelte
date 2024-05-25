<script lang="ts">
    import PointRight from '$lib/images/mockexam/systems/point-right.png';
    import PointLeft from '$lib/images/mockexam/systems/point-left.png';
</script>

<a href="https://article.womynarchive.com/play" target="_blank">
    <img src={PointRight} alt="여성서사 고인물을 위한 다른 테스트 하러가기" />
    <div class="txt">
        여성서사 고인물을 위한<br />
        <div class="txt-highlight">다른 테스트</div> 하러가기
    </div>
    <img src={PointLeft} alt="여성서사 고인물을 위한 다른 테스트 하러가기" />
</a>
  
<style>
    a {
        display: flex;
        align-items: center;
        background-color: black;
        padding: 6px;
        gap: 4px;
    }

    img {
        width: 26px;
    }

    .txt {
        color: white;
        text-align: center;
        white-space: nowrap;
    }

    .txt-highlight {
        color: #D4BEFF;
        display: inline;
    }

</style>
