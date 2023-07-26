'use strict';

{

  // videosの取得
  const videos = document.querySelector('.videos');

  // videoidの取得
  const a = document.getElementById('a');
  const b = document.getElementById('b');
  const c = document.getElementById('c');
  const d = document.getElementById('d');
  const e = document.getElementById('e');
  const f = document.getElementById('f');
  const g = document.getElementById('g');
  const h = document.getElementById('h');
  const i = document.getElementById('i');
  const j = document.getElementById('j');
  const k = document.getElementById('k');
  const l = document.getElementById('l');
  const m = document.getElementById('m');
  const n = document.getElementById('n');
  const o = document.getElementById('o');
  const p = document.getElementById('p');

  // ボタンの取得
  const b2 = document.getElementById('b2');
  const ba = document.getElementById('ba');
  const c3 = document.getElementById('c3');
  const ca = document.getElementById('ca');
  const d4 = document.getElementById('d4');
  const da = document.getElementById('da');
  const e5 = document.getElementById('e5');
  const eq17 = document.getElementById('eq17');
  const ea = document.getElementById('ea');
  const f6 = document.getElementById('f6');
  const fq17 = document.getElementById('fq17');
  const fa = document.getElementById('fa');
  const fb = document.getElementById('fb');
  const g7 = document.getElementById('g7');
  const gq17 = document.getElementById('gq17');
  const ga = document.getElementById('ga');
  const gb = document.getElementById('gb');
  const h8 = document.getElementById('h8');
  const hc = document.getElementById('hc');
  const i9 = document.getElementById('i9');
  const ic = document.getElementById('ic');
  const j10 = document.getElementById('j10');
  const jq17 = document.getElementById('jq17');
  const ja = document.getElementById('ja');
  const jd = document.getElementById('jd');
  const k11 = document.getElementById('k11');
  const kq17 = document.getElementById('kq17');
  const ka = document.getElementById('ka');
  const kd = document.getElementById('kd');
  const l12 = document.getElementById('l12');
  const lq17 = document.getElementById('lq17');
  const la = document.getElementById('la');
  const ld = document.getElementById('ld');
  const m13 = document.getElementById('m13');
  const mq17 = document.getElementById('mq17');
  const ma = document.getElementById('ma');
  const mh = document.getElementById('mh');
  const n14 = document.getElementById('n14');
  const nq17 = document.getElementById('nq17');
  const na = document.getElementById('na');
  const nh = document.getElementById('nh');
  const o15 = document.getElementById('o15');
  const oq17 = document.getElementById('oq17');
  const oa = document.getElementById('oa');
  const oi = document.getElementById('oi');
  const p16 = document.getElementById('p16');
  const pq17 = document.getElementById('oq17');
  const pa = document.getElementById('pa');
  const pi = document.getElementById('pi');
  const q17 = document.getElementById('q17');

  function handleWindowFocusChange() {
    if (document.hidden) {
      videos.pause(); // タブが非アクティブになったらビデオを一時停止
    } else {
      videos.play(); // タブがアクティブになったらビデオを再生
    }
  }

  // タブの可視性が変更された時にイベントハンドラを呼び出す
  window.addEventListener('visibilitychange', handleWindowFocusChange);

  // id="a"
  a.addEventListener('timeupdate', () => {
    const currentTime = a.currentTime;

    if (currentTime >= 88) {
      b2.style.display = 'block';
    } else {
      b2.style.display = 'none';
    }

    if (currentTime >= 93) {
      c3.style.display = 'block';
    } else {
      c3.style.display = 'none';
    }

    if (currentTime >= 99) {
      d4.style.display = 'block';
    } else {
      d4.style.display = 'none';
    }

    if (currentTime >= 103) {
      e5.style.display = 'block';
    } else {
      e5.style.display = 'none';
    }

    if (currentTime >= 133) {
      a.pause();
    }

    b2.addEventListener('click', () => {
      a.pause();
      a.style.display = 'none';
      b.style.display = 'block';
      b.load();
    });

    c3.addEventListener('click', () => {
      a.pause();
      a.style.display = 'none';
      c.style.display = 'block';
      c.load();
    });

    d4.addEventListener('click', () => {
      a.pause();
      a.style.display = 'none';
      d.style.display = 'block';
      d.load();
    });

    e5.addEventListener('click', () => {
      a.pause();
      a.style.display = 'none';
      e.style.display = 'block';
      e.load();
    });

    if (a.style.display === 'none') {
      b2.style.display = 'none';
      c3.style.display = 'none';
      d4.style.display = 'none';
      e5.style.display = 'none';
    }

    // let timeupdate = new Event('timeupdate');

    // 全画面表示のイベントを追加
    // a.addEventListener('fullscreenchange', () => {
    //   if (document.fullscreenElement || document.webkitFullscreenElement) {
    //     // フルスクリーンになったら、timeupdateイベントを手動で発火させる
    //     a.dispatchEvent(new Event('timeupdate'));
    //     console.log(ok);
    //   }
    // });

  });

  // id="b"
  b.addEventListener('timeupdate', () => {
    const currentTime = b.currentTime;

    if (currentTime >= 150) {
      f6.style.display = 'block';
    } else {
      f6.style.display = 'none';
    }

    if (currentTime >= 154) {
      g7.style.display = 'block';
    } else {
      g7.style.display = 'none';
    }

    if (currentTime >= 164) {
      ba.style.display = 'block';
    } else {
      ba.style.display = 'none';
    }

    if (currentTime >= 183) {
      b.pause();
    }

    f6.addEventListener('click', () => {
      f6.style.display = 'none';
      g7.style.display = 'none';
      ba.style.display = 'none';
      b.style.display = 'none';
      b.pause();
      f.style.display = 'block';
      f.load();
    });

    g7.addEventListener('click', () => {
      f6.style.display = 'none';
      g7.style.display = 'none';
      ba.style.display = 'none';
      b.style.display = 'none';
      b.pause();
      g.style.display = 'block';
      g.load();
    });

    ba.addEventListener('click', () => {
      f6.style.display = 'none';
      g7.style.display = 'none';
      ba.style.display = 'none';
      b.style.display = 'none';
      b.pause();
      a.style.display = 'block';
      a.load();
    });

    if (b.style.display === 'none') {
      f6.style.display = 'none';
      g7.style.display = 'none';
      ba.style.display = 'none';
    }

  });

  // id="c"
  c.addEventListener('timeupdate', () => {
    const currentTime = c.currentTime;

    if (currentTime >= 72) {
      h8.style.display = 'block';
    } else {
      h8.style.display = 'none';
    }

    if (currentTime >= 78) {
      i9.style.display = 'block';
    } else {
      i9.style.display = 'none';
    }

    if (currentTime >= 89) {
      ca.style.display = 'block';
    } else {
      ca.style.display = 'none';
    }

    if (currentTime >= 107) {
      c.pause();
    }

    h8.addEventListener('click', () => {
      h8.style.display = 'none';
      i9.style.display = 'none';
      ca.style.display = 'none';
      c.style.display = 'none';
      c.pause();
      h.style.display = 'block';
      h.load();
    });

    i9.addEventListener('click', () => {
      h8.style.display = 'none';
      i9.style.display = 'none';
      ca.style.display = 'none';
      c.style.display = 'none';
      c.pause();
      i.style.display = 'block';
      i.load();
    });

    ca.addEventListener('click', () => {
      h8.style.display = 'none';
      i9.style.display = 'none';
      ca.style.display = 'none';
      c.style.display = 'none';
      c.pause();
      a.style.display = 'block';
      a.load();
    });

    if (c.style.display === 'none') {
      h8.style.display = 'none';
      i9.style.display = 'none';
      ca.style.display = 'none';
    }

  });

  // id="d"
  d.addEventListener('timeupdate', () => {
    const currentTime = d.currentTime;

    if (currentTime >= 70) {
      j10.style.display = 'block';
    } else {
      j10.style.display = 'none';
    }

    if (currentTime >= 75) {
      k11.style.display = 'block';
    } else {
      k11.style.display = 'none';
    }

    if (currentTime >= 81) {
      l12.style.display = 'block';
    } else {
      l12.style.display = 'none';
    }

    if (currentTime >= 92) {
      da.style.display = 'block';
    } else {
      da.style.display = 'none';
    }

    if (currentTime >= 110) {
      d.pause();
    }

    j10.addEventListener('click', () => {
      j10.style.display = 'none';
      k11.style.display = 'none';
      l12.style.display = 'none';
      da.style.display = 'none';
      d.style.display = 'none';
      d.pause();
      j.style.display = 'block';
      j.load();
    });

    k11.addEventListener('click', () => {
      j10.style.display = 'none';
      k11.style.display = 'none';
      l12.style.display = 'none';
      da.style.display = 'none';
      d.style.display = 'none';
      d.pause();
      k.style.display = 'block';
      k.load();
    });

    l12.addEventListener('click', () => {
      j10.style.display = 'none';
      k11.style.display = 'none';
      l12.style.display = 'none';
      da.style.display = 'none';
      d.style.display = 'none';
      d.pause();
      l.style.display = 'block';
      l.load();
    });

    da.addEventListener('click', () => {
      j10.style.display = 'none';
      k11.style.display = 'none';
      l12.style.display = 'none';
      da.style.display = 'none';
      d.style.display = 'none';
      d.pause();
      a.style.display = 'block';
      a.load();
    });

    if (d.style.display === 'none') {
      j10.style.display = 'none';
      k11.style.display = 'none';
      l12.style.display = 'none';
      da.style.display = 'none';
    }

  });

  // id="e"
  e.addEventListener('timeupdate', () => {
    const currentTime = e.currentTime;

    if (currentTime >= 256) {
      eq17.style.display = 'block';
    } else {
      eq17.style.display = 'none';
    }

    if (currentTime >= 256) {
      ea.style.display = 'block';
    } else {
      ea.style.display = 'none';
    }

    if (currentTime >= 273) {
      e.pause();
    }

    eq17.addEventListener('click', () => {
      eq17.style.display = 'none';
      ea.style.display = 'none';
      e.style.display = 'none';
      e.pause();
    });

    ea.addEventListener('click', () => {
      eq17.style.display = 'none';
      ea.style.display = 'none';
      e.style.display = 'none';
      e.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      eq17.style.display = 'none';
      ea.style.display = 'none';
    }

  });

  // id="f"
  f.addEventListener('timeupdate', () => {
    const currentTime = f.currentTime;

    if (currentTime >= 338) {
      q17.style.display = 'block';
    } else {
      q17.style.display = 'none';
    }

    if (currentTime >= 338) {
      fa.style.display = 'block';
    } else {
      fa.style.display = 'none';
    }

    if (currentTime >= 338) {
      fb.style.display = 'block';
    } else {
      fb.style.display = 'none';
    }

    if (currentTime >= 356) {
      f.pause();
    }

    q17.addEventListener('click', () => {
      f.pause();
    });

    fa.addEventListener('click', () => {
      // q17.style.display = 'none';
      fa.style.display = 'none';
      fb.style.display = 'none';
      f.style.display = 'none';
      f.pause();
      a.style.display = 'block';
      a.load();
    });

    fb.addEventListener('click', () => {
      // q17.style.display = 'none';
      fa.style.display = 'none';
      fb.style.display = 'none';
      f.pause();
      f.style.display = 'none';
      b.style.display = 'block';
      b.load();
    });

    if (f.style.display === 'none') {
      q17.style.display = 'none';
      fa.style.display = 'none';
      fb.style.display = 'none';
    }

  });

  // id="g"
  g.addEventListener('timeupdate', () => {
    const currentTime = g.currentTime;

    if (currentTime >= 183) {
      gq17.style.display = 'block';
    } else {
      gq17.style.display = 'none';
    }

    if (currentTime >= 183) {
      ga.style.display = 'block';
    } else {
      ga.style.display = 'none';
    }

    if (currentTime >= 183) {
      gb.style.display = 'block';
    } else {
      gb.style.display = 'none';
    }

    if (currentTime >= 201) {
      g.pause();
    }

    gq17.addEventListener('click', () => {
      gq17.style.display = 'none';
      ga.style.display = 'none';
      gb.style.display = 'none';
      g.style.display = 'none';
      g.pause();
    });

    if (g.style.display === 'none') {
      gq17.style.display = 'none';
      ga.style.display = 'none';
      gb.style.display = 'none';
    }

    ga.addEventListener('click', () => {
      gq17.style.display = 'none';
      ga.style.display = 'none';
      gb.style.display = 'none';
      g.style.display = 'none';
      g.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      gq17.style.display = 'none';
      ga.style.display = 'none';
      gb.style.display = 'none';
    }

    gb.addEventListener('click', () => {
      gq17.style.display = 'none';
      ga.style.display = 'none';
      gb.style.display = 'none';
      g.style.display = 'none';
      g.pause();
      b.style.display = 'block';
      b.load();
    });

    if (b.style.display === 'block') {
      gq17.style.display = 'none';
      ga.style.display = 'none';
      gb.style.display = 'none';
    }
  });

  // id="h"
  h.addEventListener('timeupdate', () => {
    const currentTime = h.currentTime;

    if (currentTime >= 21) {
      m13.style.display = 'block';
    } else {
      m13.style.display = 'none';
    }

    if (currentTime >= 24) {
      n14.style.display = 'block';
    } else {
      n14.style.display = 'none';
    }

    if (currentTime >= 33) {
      hc.style.display = 'block';
    } else {
      hc.style.display = 'none';
    }

    if (currentTime >= 52) {
      h.pause();
    }

    m13.addEventListener('click', () => {
      m13.style.display = 'none';
      n14.style.display = 'none';
      hc.style.display = 'none';
      h.style.display = 'none';
      h.pause();
      m.style.display = 'block';
      m.load();
    });

    n14.addEventListener('click', () => {
      m13.style.display = 'none';
      n14.style.display = 'none';
      hc.style.display = 'none';
      h.style.display = 'none';
      h.pause();
      n.style.display = 'block';
      n.load();
    });

    hc.addEventListener('click', () => {
      m13.style.display = 'none';
      n14.style.display = 'none';
      hc.style.display = 'none';
      h.style.display = 'none';
      h.pause();
      c.style.display = 'block';
      c.load();
    });

    if (h.style.display === 'none') {
      m13.style.display = 'none';
      n14.style.display = 'none';
      hc.style.display = 'none';
    }

  });

  // id="i"
  i.addEventListener('timeupdate', () => {
    const currentTime = i.currentTime;

    if (currentTime >= 68) {
      o15.style.display = 'block';
    } else {
      o15.style.display = 'none';
    }

    if (currentTime >= 68) {
      p16.style.display = 'block';
    } else {
      p16.style.display = 'none';
    }

    if (currentTime >= 68) {
      ic.style.display = 'block';
    } else {
      ic.style.display = 'none';
    }

    if (currentTime >= 83) {
      i.pause();
    }

    o15.addEventListener('click', () => {
      o15.style.display = 'none';
      p16.style.display = 'none';
      ic.style.display = 'none';
      i.style.display = 'none';
      i.pause();
      o.style.display = 'block';
      o.load();
    });

    p16.addEventListener('click', () => {
      o15.style.display = 'none';
      p16.style.display = 'none';
      ic.style.display = 'none';
      i.style.display = 'none';
      i.pause();
      p.style.display = 'block';
      p.load();
    });

    ic.addEventListener('click', () => {
      o15.style.display = 'none';
      p16.style.display = 'none';
      ic.style.display = 'none';
      i.style.display = 'none';
      i.pause();
      c.style.display = 'block';
      c.load();
    });

    if (i.style.display === 'none') {
      o15.style.display = 'none';
      p16.style.display = 'none';
      ic.style.display = 'none';
    }
  });

  // id="j"
  j.addEventListener('timeupdate', () => {
    const currentTime = j.currentTime;

    if (currentTime >= 186) {
      jq17.style.display = 'block';
    } else {
      jq17.style.display = 'none';
    }

    if (currentTime >= 186) {
      ja.style.display = 'block';
    } else {
      ja.style.display = 'none';
    }

    if (currentTime >= 186) {
      jd.style.display = 'block';
    } else {
      jd.style.display = 'none';
    }

    if (currentTime >= 203) {
      j.pause();
    }

    jq17.addEventListener('click', () => {
      jq17.style.display = 'none';
      ja.style.display = 'none';
      jd.style.display = 'none';
      j.style.display = 'none';
      j.pause();
    });

    if (j.style.display === 'none') {
      jq17.style.display = 'none';
      ja.style.display = 'none';
      jd.style.display = 'none';
    }

    ja.addEventListener('click', () => {
      jq17.style.display = 'none';
      ja.style.display = 'none';
      jd.style.display = 'none';
      j.style.display = 'none';
      j.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      jq17.style.display = 'none';
      ja.style.display = 'none';
      jd.style.display = 'none';
    }

    jd.addEventListener('click', () => {
      jq17.style.display = 'none';
      ja.style.display = 'none';
      jd.style.display = 'none';
      j.style.display = 'none';
      j.pause();
      d.style.display = 'block';
      d.load();
    });

    if (d.style.display === 'block') {
      jq17.style.display = 'none';
      ja.style.display = 'none';
      jd.style.display = 'none';
    }
  });

  // id="k"
  k.addEventListener('timeupdate', () => {
    const currentTime = k.currentTime;

    if (currentTime >= 152) {
      kq17.style.display = 'block';
    } else {
      kq17.style.display = 'none';
    }

    if (currentTime >= 152) {
      ka.style.display = 'block';
    } else {
      ka.style.display = 'none';
    }

    if (currentTime >= 152) {
      kd.style.display = 'block';
    } else {
      kd.style.display = 'none';
    }

    if (currentTime >= 169) {
      k.pause();
    }

    kq17.addEventListener('click', () => {
      kq17.style.display = 'none';
      ka.style.display = 'none';
      kd.style.display = 'none';
      k.style.display = 'none';
      k.pause();
    });

    if (k.style.display === 'none') {
      kq17.style.display = 'none';
      ka.style.display = 'none';
      kd.style.display = 'none';
    }

    ka.addEventListener('click', () => {
      k.pause();
      k.style.display = 'none';
      kq17.style.display = 'none';
      ka.style.display = 'none';
      kd.style.display = 'none';

      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      kq17.style.display = 'none';
      ka.style.display = 'none';
      kd.style.display = 'none';
    }

    kd.addEventListener('click', () => {
      kq17.style.display = 'none';
      ka.style.display = 'none';
      kd.style.display = 'none';
      k.style.display = 'none';
      k.pause();
      d.style.display = 'block';
      d.load();
    });

    if (d.style.display === 'block') {
      kq17.style.display = 'none';
      ka.style.display = 'none';
      kd.style.display = 'none';
    }
  });

  // id="l"
  l.addEventListener('timeupdate', () => {
    const currentTime = l.currentTime;

    if (currentTime >= 172) {
      lq17.style.display = 'block';
    } else {
      lq17.style.display = 'none';
    }

    if (currentTime >= 172) {
      la.style.display = 'block';
    } else {
      la.style.display = 'none';
    }

    if (currentTime >= 172) {
      ld.style.display = 'block';
    } else {
      ld.style.display = 'none';
    }

    if (currentTime >= 189) {
      l.pause();
    }

    lq17.addEventListener('click', () => {
      lq17.style.display = 'none';
      la.style.display = 'none';
      ld.style.display = 'none';
      l.style.display = 'none';
      l.pause();
    });

    if (l.style.display === 'none') {
      lq17.style.display = 'none';
      la.style.display = 'none';
      ld.style.display = 'none';
    }

    la.addEventListener('click', () => {
      lq17.style.display = 'none';
      la.style.display = 'none';
      ld.style.display = 'none';
      l.style.display = 'none';
      l.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      lq17.style.display = 'none';
      la.style.display = 'none';
      ld.style.display = 'none';
    }

    ld.addEventListener('click', () => {
      lq17.style.display = 'none';
      la.style.display = 'none';
      ld.style.display = 'none';
      l.style.display = 'none';
      l.pause();
      d.style.display = 'block';
      d.load();
    });

    if (d.style.display === 'block') {
      lq17.style.display = 'none';
      la.style.display = 'none';
      ld.style.display = 'none';
    }
  });

  // id="m"
  m.addEventListener('timeupdate', () => {
    const currentTime = m.currentTime;

    if (currentTime >= 267) {
      mq17.style.display = 'block';
    } else {
      mq17.style.display = 'none';
    }

    if (currentTime >= 267) {
      ma.style.display = 'block';
    } else {
      ma.style.display = 'none';
    }

    if (currentTime >= 267) {
      mh.style.display = 'block';
    } else {
      mh.style.display = 'none';
    }

    if (currentTime >= 284) {
      m.pause();
    }

    mq17.addEventListener('click', () => {
      mq17.style.display = 'none';
      ma.style.display = 'none';
      mh.style.display = 'none';
      m.style.display = 'none';
      m.pause();
    });

    if (m.style.display === 'none') {
      mq17.style.display = 'none';
      ma.style.display = 'none';
      mh.style.display = 'none';
    }

    ma.addEventListener('click', () => {
      mq17.style.display = 'none';
      ma.style.display = 'none';
      mh.style.display = 'none';
      m.style.display = 'none';
      m.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      mq17.style.display = 'none';
      ma.style.display = 'none';
      mh.style.display = 'none';
    }

    mh.addEventListener('click', () => {
      mq17.style.display = 'none';
      ma.style.display = 'none';
      mh.style.display = 'none';
      m.style.display = 'none';
      m.pause();
      h.style.display = 'block';
      h.load();
    });

    if (h.style.display === 'block') {
      mq17.style.display = 'none';
      ma.style.display = 'none';
      mh.style.display = 'none';
    }
  });

  // id="n"
  n.addEventListener('timeupdate', () => {
    const currentTime = n.currentTime;

    if (currentTime >= 278) {
      nq17.style.display = 'block';
    } else {
      nq17.style.display = 'none';
    }

    if (currentTime >= 278) {
      na.style.display = 'block';
    } else {
      na.style.display = 'none';
    }

    if (currentTime >= 278) {
      nh.style.display = 'block';
    } else {
      nh.style.display = 'none';
    }

    if (currentTime >= 295) {
      n.pause();
    }

    nq17.addEventListener('click', () => {
      nq17.style.display = 'none';
      na.style.display = 'none';
      nh.style.display = 'none';
      n.style.display = 'none';
      n.pause();
    });

    if (n.style.display === 'none') {
      nq17.style.display = 'none';
      na.style.display = 'none';
      nh.style.display = 'none';
    }

    na.addEventListener('click', () => {
      nq17.style.display = 'none';
      na.style.display = 'none';
      nh.style.display = 'none';
      n.style.display = 'none';
      n.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      nq17.style.display = 'none';
      na.style.display = 'none';
      nh.style.display = 'none';
    }

    nh.addEventListener('click', () => {
      nq17.style.display = 'none';
      na.style.display = 'none';
      nh.style.display = 'none';
      n.style.display = 'none';
      n.pause();
      h.style.display = 'block';
      h.load();
    });

    if (h.style.display === 'block') {
      nq17.style.display = 'none';
      na.style.display = 'none';
      nh.style.display = 'none';
    }
  });

  // id="o"
  o.addEventListener('timeupdate', () => {
    const currentTime = o.currentTime;

    if (currentTime >= 146) {
      oq17.style.display = 'block';
    } else {
      oq17.style.display = 'none';
    }

    if (currentTime >= 146) {
      oa.style.display = 'block';
    } else {
      oa.style.display = 'none';
    }

    if (currentTime >= 146) {
      oi.style.display = 'block';
    } else {
      oi.style.display = 'none';
    }

    if (currentTime >= 163) {
      o.pause();
    }

    oq17.addEventListener('click', () => {
      oq17.style.display = 'none';
      oa.style.display = 'none';
      oi.style.display = 'none';
      o.style.display = 'none';
      o.pause();
    });

    if (o.style.display === 'none') {
      oq17.style.display = 'none';
      oa.style.display = 'none';
      oi.style.display = 'none';
    }

    oa.addEventListener('click', () => {
      oq17.style.display = 'none';
      oa.style.display = 'none';
      oi.style.display = 'none';
      o.style.display = 'none';
      o.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      oq17.style.display = 'none';
      oa.style.display = 'none';
      oi.style.display = 'none';
    }

    oi.addEventListener('click', () => {
      oq17.style.display = 'none';
      oa.style.display = 'none';
      oi.style.display = 'none';
      o.style.display = 'none';
      o.pause();
      i.style.display = 'block';
      i.load();
    });

    if (i.style.display === 'block') {
      oq17.style.display = 'none';
      oa.style.display = 'none';
      oi.style.display = 'none';
    }
  });

  // id="p"
  p.addEventListener('timeupdate', () => {
    const currentTime = p.currentTime;

    if (currentTime >= 240) {
      pq17.style.display = 'block';
    } else {
      pq17.style.display = 'none';
    }

    if (currentTime >= 240) {
      pa.style.display = 'block';
    } else {
      pa.style.display = 'none';
    }

    if (currentTime >= 240) {
      pi.style.display = 'block';
    } else {
      pi.style.display = 'none';
    }

    if (currentTime >= 256) {
      p.pause();
    }

    pq17.addEventListener('click', () => {
      pq17.style.display = 'none';
      pa.style.display = 'none';
      pi.style.display = 'none';
      p.style.display = 'none';
      p.pause();
    });

    if (p.style.display === 'none') {
      pq17.style.display = 'none';
      pa.style.display = 'none';
      pi.style.display = 'none';
    }

    pa.addEventListener('click', () => {
      pq17.style.display = 'none';
      pa.style.display = 'none';
      pi.style.display = 'none';
      p.style.display = 'none';
      p.pause();
      a.style.display = 'block';
      a.load();
    });

    if (a.style.display === 'block') {
      pq17.style.display = 'none';
      pa.style.display = 'none';
      pi.style.display = 'none';
    }

    pi.addEventListener('click', () => {
      pq17.style.display = 'none';
      pa.style.display = 'none';
      pi.style.display = 'none';
      p.style.display = 'none';
      p.pause();
      i.style.display = 'block';
      i.load();
    });

    if (i.style.display === 'block') {
      pq17.style.display = 'none';
      pa.style.display = 'none';
      pi.style.display = 'none';
    }
  });

}
