'use strict';

{

  // videosの取得
  const videos = document.querySelectorAll(".videos");

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

  const box2 = document.getElementById("box2");

  const video1 = document.getElementById('video1');
  const video2 = document.getElementById('video2');
  const video3 = document.getElementById('video3');
  const video4 = document.getElementById('video4');
  const video5 = document.getElementById('video5');
  const video6 = document.getElementById('video6');
  const video7 = document.getElementById('video7');
  const video8 = document.getElementById('video8');
  const video9 = document.getElementById('video9');
  const video10 = document.getElementById('video10');
  const video11 = document.getElementById('video11');
  const video12 = document.getElementById('video12');
  const video13 = document.getElementById('video13');
  const video14 = document.getElementById('video14');
  const video15 = document.getElementById('video15');
  const video16 = document.getElementById('video16');

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

  let focuse1 = false;
  let focuse2 = false;
  let focuse3 = false;
  let focuse4 = false;
  let focuse5 = false;
  let focuse6 = false;
  let focuse7 = false;
  let focuse8 = false;
  let focuse9 = false;
  let focuse10 = false;
  let focuse11 = false;
  let focuse12 = false;
  let focuse13 = false;
  let focuse14 = false;
  let focuse15 = false;
  let focuse16 = false;

  // ビデオ要素が読み込まれたら表示する
  a.addEventListener('loadeddata', () => {
    a.style.display = 'block';
  });

  window.addEventListener('focus', () => {
    if (focuse1) {
      a.play();
    }
  });

  window.addEventListener('blur', () => {
    if (focuse1) {
      a.pause();
    }
  });

   window.addEventListener('focus', () => {
     if (focuse2) {
       b.play();
     }
   });

   window.addEventListener('blur', () => {
     if (focuse2) {
       b.pause();
     }
   });

  window.addEventListener('focus', () => {
    if (focuse3) {
      c.play();
    }
  });

  window.addEventListener('blur', () => {
    if (focuse3) {
      c.pause();
    }
  });

  window.addEventListener('focus', () => {
    if (focuse4) {
      d.play();
    }
  });
  window.addEventListener('blur', () => {
    if (focuse4) {
      d.pause();
    }
  });

  window.addEventListener('focus', () => {
    if (focuse5) {
      e.play();
    }
  });
  window.addEventListener('blur', () => {
    if (focuse5) {
      e.pause();
    }
  });

  window.addEventListener('focus', () => {
    if (focuse6) {
      f.play();
    }
  });
  window.addEventListener('blur', () => {
    if (focuse6) {
      f.pause();
    }
  });

  window.addEventListener('focus', () => {
    if (focuse7) {
      g.play();
    }
  });
  window.addEventListener('blur', () => {
    if (focuse7) {
      g.pause();
    }
  });

  window.addEventListener('focus', () => {
    if (focuse8) {
      h.play();
    }
  });
  window.addEventListener('blur', () => {
    if (focuse8) {
      h.pause();
    }
  });

  window.addEventListener('focus', () => {
    if (focuse9) {
      i.play();
    }
  });
  window.addEventListener('blur', () => {
    if (focuse9) {
      i.pause();
    }
  });

  window.addEventListener('focus', () => {
    if (focuse10) {
      j.play();
    }
  });
  window.addEventListener('blur', () => {
    if (focuse10) {
      j.pause();
    }
  });

  window.addEventListener('focus', () => {
    if (focuse11) {
      k.play();
    }
  });
  window.addEventListener('blur', () => {
    if (focuse11) {
      k.pause();
    }
  });

  window.addEventListener('focus', () => {
    if (focuse12) {
      l.play();
    }
  });
  window.addEventListener('blur', () => {
    if (focuse12) {
      l.pause();
    }
  });

  window.addEventListener('focus', () => {
    if (focuse13) {
      m.play();
    }
  });
  window.addEventListener('blur', () => {
    if (focuse13) {
      m.pause();
    }
  });

  window.addEventListener('focus', () => {
    if (focuse14) {
      n.play();
    }
  });
  window.addEventListener('blur', () => {
    if (focuse14) {
      n.pause();
    }
  });

  window.addEventListener('focus', () => {
    if (focuse15) {
      o.play();
    }
  });
  window.addEventListener('blur', () => {
    if (focuse15) {
      o.pause();
    }
  });

  window.addEventListener('focus', () => {
    if (focuse16) {
      p.play();
    }
  });
  window.addEventListener('blur', () => {
    if (focuse16) {
      p.pause();
    }
  });

  // id="a"
  a.addEventListener('timeupdate', () => {
    const currentTime = a.currentTime;

    if (a.style.display === 'block') {
      focuse1 = true;
    } else {
      focuse1 = false;
      a.currentTime = 0;
      a.pause();
    }

    if (currentTime >= 88) {
      box2.style.display = 'block';
      b2.style.display = 'block';
    } else {
      // box2.style.display = 'none';
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
      a.currentTime = 0;
      a.pause();
      a.style.display = 'none';
      b.style.display = 'block';
      b.play();
    });

    c3.addEventListener('click', () => {
      a.currentTime = 0;
      a.pause();
      a.style.display = 'none';
      c.style.display = 'block';
      c.play();
    });

    d4.addEventListener('click', () => {
      a.currentTime = 0;
      a.pause();
      a.style.display = 'none';
      d.style.display = 'block';
      d.play();
    });

    e5.addEventListener('click', () => {
      a.currentTime = 0;
      a.pause();
      a.style.display = 'none';
      e.style.display = 'block';
      e.play();
    });

  });

  // id="b"
  b.addEventListener('timeupdate', () => {
    const currentTime = b.currentTime;

      if (b.style.display === 'block') {
        focuse2 = true;
      } else {
        focuse2 = false;
        b.pause();
      }

    if (currentTime >= 150) {
      box2.style.display = 'block';
      f6.style.display = 'block';
    } else {
      f6.style.display = 'none';
      box2.style.display = 'none';
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
      b.currentTime = 0;
      b.pause();
      b.style.display = 'none';
      f.style.display = 'block';
      f.play();
    });

    g7.addEventListener('click', () => {
      b.currentTime = 0;
      b.pause();
      b.style.display = 'none';
      g.style.display = 'block';
      g.play();
    });

    ba.addEventListener('click', () => {
      b.currentTime = 0;
      b.pause();
      b.style.display = 'none';
      a.style.display = 'block';
      a.play();
    });

  });

  // id="c"
  c.addEventListener('timeupdate', () => {
    const currentTime = c.currentTime;

    if (c.style.display === 'block') {
      focuse3 = true;
    } else {
      focuse3 = false;
      c.pause();
    }

    if (currentTime >= 72) {
      box2.style.display = 'block';
      h8.style.display = 'block';
    } else {
      h8.style.display = 'none';
      box2.style.display = 'none';
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
      c.currentTime = 0;
      c.pause();
      c.style.display = 'none';
      h.style.display = 'block';
      h.play();
    });

    i9.addEventListener('click', () => {
      c.currentTime = 0;
      c.pause();
      c.style.display = 'none';
      i.style.display = 'block';
      i.play();
    });

    ca.addEventListener('click', () => {
      c.currentTime = 0;
      c.pause();
      c.style.display = 'none';
      a.style.display = 'block';
      a.play();
    });

  });

  // id="d"
  d.addEventListener('timeupdate', () => {
    const currentTime = d.currentTime;

    if (d.style.display === 'block') {
      focuse4 = true;
    } else {
      focuse4 = false;
      d.pause();
    }

    if (currentTime >= 70) {
      box2.style.display = 'block';
      j10.style.display = 'block';
    } else {
      j10.style.display = 'none';
      box2.style.display = 'none';
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
      d.currentTime = 0;
      d.pause();
      d.style.display = 'none';
      j.style.display = 'block';
      j.play();
    });

    k11.addEventListener('click', () => {
      d.currentTime = 0;
      d.pause();
      d.style.display = 'none';
      k.style.display = 'block';
      k.play();
    });

    l12.addEventListener('click', () => {
      d.currentTime = 0;
      d.pause();
      d.style.display = 'none';
      l.style.display = 'block';
      l.play();
    });

    da.addEventListener('click', () => {
      d.currentTime = 0;
      d.pause();
      d.style.display = 'none';
      a.style.display = 'block';
      a.play();
    });

  });

  // id="e"
  e.addEventListener('timeupdate', () => {
    const currentTime = e.currentTime;

    if (e.style.display === 'block') {
      focuse5 = true;
    } else {
      focuse5 = false;
      e.pause();
    }

    if (currentTime >= 256) {
      box2.style.display = 'block';
      eq17.style.display = 'block';
    } else {
      eq17.style.display = 'none';
      box2.style.display = 'none';
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
      e.pause();
    });

    ea.addEventListener('click', () => {
      e.currentTime = 0;
      e.pause();
      e.style.display = 'none';
      a.style.display = 'block';
      a.play();
    });

  });

  // id="f"
  f.addEventListener('timeupdate', () => {
    const currentTime = f.currentTime;

    if (f.style.display === 'block') {
      focuse6 = true;
    } else {
      focuse6 = false;
      f.pause();
    }

    if (currentTime >= 338) {
      box2.style.display = 'block';
      fq17.style.display = 'block';
    } else {
      fq17.style.display = 'none';
      box2.style.display = 'none';
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

    fq17.addEventListener('click', () => {
      f.pause();
    });

    fa.addEventListener('click', () => {
      f.currentTime = 0;
      f.pause();
      f.style.display = 'none';
      a.style.display = 'block';
      a.play();
    });

    fb.addEventListener('click', () => {
      f.currentTime = 0;
      f.pause();
      f.style.display = 'none';
      b.style.display = 'block';
      b.play();
    });

  });

  // id="g"
  g.addEventListener('timeupdate', () => {
    const currentTime = g.currentTime;

    if (g.style.display === 'block') {
      focuse7 = true;
    } else {
      focuse7 = false;
      g.pause();
    }

    if (currentTime >= 183) {
      box2.style.display = 'block';
      gq17.style.display = 'block';
    } else {
      gq17.style.display = 'none';
      box2.style.display = 'none';
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
      g.pause();
    });

    ga.addEventListener('click', () => {
      g.currentTime = 0;
      g.pause();
      g.style.display = 'none';
      a.style.display = 'block';
      a.play();
    });

    gb.addEventListener('click', () => {
      g.currentTime = 0;
      g.pause();
      g.style.display = 'none';
      b.style.display = 'block';
      b.play();
    });

  });

  // id="h"
  h.addEventListener('timeupdate', () => {
    const currentTime = h.currentTime;

    if (h.style.display === 'block') {
      focuse8 = true;
    } else {
      focuse8 = false;
      h.pause();
    }

    if (currentTime >= 21) {
      box2.style.display = 'block';
      m13.style.display = 'block';
    } else {
      m13.style.display = 'none';
      box2.style.display = 'none';
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
      h.currentTime = 0;
      h.style.display = 'none';
      h.pause();
      m.style.display = 'block';
      m.play();
    });

    n14.addEventListener('click', () => {
      h.currentTime = 0;
      h.style.display = 'none';
      h.pause();
      n.style.display = 'block';
      n.play();
    });

    hc.addEventListener('click', () => {
      h.currentTime = 0;
      h.style.display = 'none';
      h.pause();
      c.style.display = 'block';
      c.play();
    });

  });

  // id="i"
  i.addEventListener('timeupdate', () => {
    const currentTime = i.currentTime;

    if (i.style.display === 'block') {
      focuse9 = true;
    } else {
      focuse9 = false;
      i.pause();
    }

    if (currentTime >= 68) {
      box2.style.display = 'block';
      o15.style.display = 'block';
    } else {
      o15.style.display = 'none';
      box2.style.display = 'none';
    }

    if (currentTime >= 68) {
      p16.style.display = 'block';
    } else {
      p16.style.display = 'none';
    }
9
    if (currentTime >= 68) {
      ic.style.display = 'block';
    } else {
      ic.style.display = 'none';
    }

    if (currentTime >= 83) {
      i.pause();
    }

    o15.addEventListener('click', () => {
      i.currentTime = 0;
      i.style.display = 'none';
      i.pause();
      o.style.display = 'block';
      o.play();
    });

    p16.addEventListener('click', () => {
      i.currentTime = 0;
      i.style.display = 'none';
      i.pause();
      p.style.display = 'block';
      p.play();
    });

    ic.addEventListener('click', () => {
      i.currentTime = 0;
      i.style.display = 'none';
      i.pause();
      c.style.display = 'block';
      c.play();
    });

  });

  // id="j"
  j.addEventListener('timeupdate', () => {
    const currentTime = j.currentTime;

    if (j.style.display === 'block') {
      focuse10 = true;
    } else {
      focuse10 = false;
      j.pause();
    }

    if (currentTime >= 186) {
      box2.style.display = 'block';
      jq17.style.display = 'block';
    } else {
      jq17.style.display = 'none';
      box2.style.display = 'none';
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
      j.pause();
    });

    ja.addEventListener('click', () => {
      j.currentTime = 0;
      j.pause();
      j.style.display = 'none';
      a.style.display = 'block';
      a.play();
    });

    jd.addEventListener('click', () => {
      j.currentTime = 0;
      j.pause();
      j.style.display = 'none';
      d.style.display = 'block';
      d.play();
    });

  });

  // id="k"
  k.addEventListener('timeupdate', () => {
    const currentTime = k.currentTime;

    if (k.style.display === 'block') {
      focuse11 = true;
    } else {
      focuse11 = false;
      k.pause();
    }

    if (currentTime >= 152) {
      box2.style.display = 'block';
      kq17.style.display = 'block';
    } else {
      kq17.style.display = 'none';
      box2.style.display = 'none';
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
      k.pause();
    });

    ka.addEventListener('click', () => {
      k.currentTime = 0;
      k.pause();
      k.style.display = 'none';
      a.style.display = 'block';
      a.play();
    });

    kd.addEventListener('click', () => {
      k.currentTime = 0;
      k.pause();
      k.style.display = 'none';
      d.style.display = 'block';
      d.play();
    });

  });

  // id="l"
  l.addEventListener('timeupdate', () => {
    const currentTime = l.currentTime;

    if (l.style.display === 'block') {
      focuse12 = true;
    } else {
      focuse12 = false;
      l.pause();
    }

    if (currentTime >= 172) {
      box2.style.display = 'block';
      lq17.style.display = 'block';
    } else {
      lq17.style.display = 'none';
      box2.style.display = 'none';
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
      l.pause();
    });

    la.addEventListener('click', () => {
      l.currentTime = 0;
      l.pause();
      l.style.display = 'none';
      a.style.display = 'block';
      a.play();
    });

    ld.addEventListener('click', () => {
      l.currentTime = 0;
      l.pause();
      l.style.display = 'none';
      d.style.display = 'block';
      d.play();
    });

  });

  // id="m"
  m.addEventListener('timeupdate', () => {
    const currentTime = m.currentTime;

    if (m.style.display === 'block') {
      focuse13 = true;
    } else {
      focuse13 = false;
      m.pause();
    }

    if (currentTime >= 267) {
      box2.style.display = 'block';
      mq17.style.display = 'block';
    } else {
      mq17.style.display = 'none';
      box2.style.display = 'none';
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
      m.pause();
    });

    ma.addEventListener('click', () => {
      m.currentTime = 0;
      m.pause();
      m.style.display = 'none';
      a.style.display = 'block';
      a.play();
    });

    mh.addEventListener('click', () => {
      m.currentTime = 0;
      m.pause();
      m.style.display = 'none';
      h.style.display = 'block';
      h.play();
    });

  });

  // id="n"
  n.addEventListener('timeupdate', () => {
    const currentTime = n.currentTime;

    if (n.style.display === 'block') {
      focuse14 = true;
    } else {
      focuse14 = false;
      n.pause();
    }

    if (currentTime >= 278) {
      box2.style.display = 'block';
      nq17.style.display = 'block';
    } else {
      nq17.style.display = 'none';
      box2.style.display = 'none';
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
      n.pause();
    });

    na.addEventListener('click', () => {
      n.currentTime = 0;
      n.pause();
      n.style.display = 'none';
      a.style.display = 'block';
      a.play();
    });

    nh.addEventListener('click', () => {
      n.currentTime = 0;
      n.pause();
      n.style.display = 'none';
      h.style.display = 'block';
      h.play();
    });

  });

  // id="o"
  o.addEventListener('timeupdate', () => {
    const currentTime = o.currentTime;

    if (o.style.display === 'block') {
      focuse15 = true;
    } else {
      focuse15 = false;
      o.pause();
    }

    if (currentTime >= 146) {
      box2.style.display = 'block';
      oq17.style.display = 'block';
    } else {
      oq17.style.display = 'none';
      box2.style.display = 'none';
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
      o.pause();
    });

    oa.addEventListener('click', () => {
      o.currentTime = 0;
      o.pause();
      o.style.display = 'none';
      a.style.display = 'block';
      a.play();
    });

    oi.addEventListener('click', () => {
      o.currentTime = 0;
      o.pause();
      o.style.display = 'none';
      i.style.display = 'block';
      i.play();
    });

  });

  // id="p"
  p.addEventListener('timeupdate', () => {
    const currentTime = p.currentTime;

    if (p.style.display === 'block') {
      focuse16 = true;
    } else {
      focuse16 = false;
      p.pause();
    }

    if (currentTime >= 240) {
      box2.style.display = 'block';
      pq17.style.display = 'block';
    } else {
      pq17.style.display = 'none';
      box2.style.display = 'none';
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
      p.pause();
    });

    pa.addEventListener('click', () => {
      p.currentTime = 0;
      p.pause();
      p.style.display = 'none';
      a.style.display = 'block';
      a.play();
    });

    pi.addEventListener('click', () => {
      p.currentTime = 0;
      p.pause();
      p.style.display = 'none';
      i.style.display = 'block';
      i.play();
    });

  });

}