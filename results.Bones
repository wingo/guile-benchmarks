
****************************
Benchmarking Bones on Tue 31 May 15:04:29 CEST 2016 under Linux nexion 4.5.4-1-ARCH #1 SMP PREEMPT Wed May 11 22:21:28 CEST 2016 x86_64 GNU/Linux

Testing browse under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/browse.scm > /tmp/larcenous/Bones/browse.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/browse.scm.s -o /tmp/larcenous/Bones/browse.scm.o
gcc /tmp/larcenous/Bones/browse.scm.o -o /tmp/larcenous/Bones/browse.exe
Running...
Running browse:2000
Elapsed time: 0.652850715 seconds (0.0) for browse:2000
+!CSVLINE!+bones-unknown,browse:2000,0.652850715

real	0m0.655s
user	0m0.650s
sys	0m0.003s

Testing deriv under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/deriv.scm > /tmp/larcenous/Bones/deriv.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/deriv.scm.s -o /tmp/larcenous/Bones/deriv.scm.o
gcc /tmp/larcenous/Bones/deriv.scm.o -o /tmp/larcenous/Bones/deriv.exe
Running...
Running deriv:10000000
Elapsed time: 5.092715062 seconds (5.0) for deriv:10000000
+!CSVLINE!+bones-unknown,deriv:10000000,5.092715062

real	0m5.094s
user	0m5.087s
sys	0m0.003s

Testing destruc under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/destruc.scm > /tmp/larcenous/Bones/destruc.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/destruc.scm.s -o /tmp/larcenous/Bones/destruc.scm.o
gcc /tmp/larcenous/Bones/destruc.scm.o -o /tmp/larcenous/Bones/destruc.exe
Running...
Running destruc:600:50:4000
Elapsed time: 9.980509725999999 seconds (10.0) for destruc:600:50:4000
+!CSVLINE!+bones-unknown,destruc:600:50:4000,9.980509725999999

real	0m9.982s
user	0m9.973s
sys	0m0.007s

Testing diviter under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/diviter.scm > /tmp/larcenous/Bones/diviter.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/diviter.scm.s -o /tmp/larcenous/Bones/diviter.scm.o
gcc /tmp/larcenous/Bones/diviter.scm.o -o /tmp/larcenous/Bones/diviter.exe
Running...
Running diviter:1000:1000000
Elapsed time: 2.526302386 seconds (3.0) for diviter:1000:1000000
+!CSVLINE!+bones-unknown,diviter:1000:1000000,2.526302386

real	0m2.527s
user	0m2.520s
sys	0m0.007s

Testing divrec under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/divrec.scm > /tmp/larcenous/Bones/divrec.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/divrec.scm.s -o /tmp/larcenous/Bones/divrec.scm.o
gcc /tmp/larcenous/Bones/divrec.scm.o -o /tmp/larcenous/Bones/divrec.exe
Running...
Running divrec:1000:1000000
Elapsed time: 4.999580366 seconds (5.0) for divrec:1000:1000000
+!CSVLINE!+bones-unknown,divrec:1000:1000000,4.999580366

real	0m5.001s
user	0m5.000s
sys	0m0.000s

Testing puzzle under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/puzzle.scm > /tmp/larcenous/Bones/puzzle.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/puzzle.scm.s -o /tmp/larcenous/Bones/puzzle.scm.o
gcc /tmp/larcenous/Bones/puzzle.scm.o -o /tmp/larcenous/Bones/puzzle.exe
Running...
Running puzzle:1000
Elapsed time: 18.251663745 seconds (18.0) for puzzle:1000
+!CSVLINE!+bones-unknown,puzzle:1000,18.251663745

real	0m18.253s
user	0m18.250s
sys	0m0.000s

Testing triangl under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/triangl.scm > /tmp/larcenous/Bones/triangl.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/triangl.scm.s -o /tmp/larcenous/Bones/triangl.scm.o
gcc /tmp/larcenous/Bones/triangl.scm.o -o /tmp/larcenous/Bones/triangl.exe
Running...
Running triangl:22:1:50
Elapsed time: 11.817932473 seconds (12.0) for triangl:22:1:50
+!CSVLINE!+bones-unknown,triangl:22:1:50,11.817932473

real	0m11.819s
user	0m11.807s
sys	0m0.010s

Testing tak under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/tak.scm > /tmp/larcenous/Bones/tak.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/tak.scm.s -o /tmp/larcenous/Bones/tak.scm.o
gcc /tmp/larcenous/Bones/tak.scm.o -o /tmp/larcenous/Bones/tak.exe
Running...
Running tak:40:20:11:1
Elapsed time: 18.828786518 seconds (19.0) for tak:40:20:11:1
+!CSVLINE!+bones-unknown,tak:40:20:11:1,18.828786518

real	0m18.830s
user	0m18.823s
sys	0m0.003s

Testing takl under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/takl.scm > /tmp/larcenous/Bones/takl.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/takl.scm.s -o /tmp/larcenous/Bones/takl.scm.o
gcc /tmp/larcenous/Bones/takl.scm.o -o /tmp/larcenous/Bones/takl.exe
Running...
Running takl:40:20:12:1
Elapsed time: 8.120031807 seconds (8.0) for takl:40:20:12:1
+!CSVLINE!+bones-unknown,takl:40:20:12:1,8.120031807

real	0m8.121s
user	0m8.113s
sys	0m0.007s

Testing ntakl under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/ntakl.scm > /tmp/larcenous/Bones/ntakl.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/ntakl.scm.s -o /tmp/larcenous/Bones/ntakl.scm.o
gcc /tmp/larcenous/Bones/ntakl.scm.o -o /tmp/larcenous/Bones/ntakl.exe
Running...
Running ntakl:40:20:12:1
Elapsed time: 10.878441798 seconds (11.0) for ntakl:40:20:12:1
+!CSVLINE!+bones-unknown,ntakl:40:20:12:1,10.878441798

real	0m10.880s
user	0m10.870s
sys	0m0.007s

Testing cpstak under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/cpstak.scm > /tmp/larcenous/Bones/cpstak.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/cpstak.scm.s -o /tmp/larcenous/Bones/cpstak.scm.o
gcc /tmp/larcenous/Bones/cpstak.scm.o -o /tmp/larcenous/Bones/cpstak.exe
Running...
Running cpstak:40:20:11:1
Elapsed time: 21.447667634 seconds (21.0) for cpstak:40:20:11:1
+!CSVLINE!+bones-unknown,cpstak:40:20:11:1,21.447667634

real	0m21.449s
user	0m21.440s
sys	0m0.003s

Testing ctak under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/ctak.scm > /tmp/larcenous/Bones/ctak.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/ctak.scm.s -o /tmp/larcenous/Bones/ctak.scm.o
gcc /tmp/larcenous/Bones/ctak.scm.o -o /tmp/larcenous/Bones/ctak.exe
Running...
Running ctak:32:16:8:1
Elapsed time: 3.138528394 seconds (3.0) for ctak:32:16:8:1
+!CSVLINE!+bones-unknown,ctak:32:16:8:1,3.138528394

real	0m3.140s
user	0m3.133s
sys	0m0.003s

Testing fib under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/fib.scm > /tmp/larcenous/Bones/fib.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/fib.scm.s -o /tmp/larcenous/Bones/fib.scm.o
gcc /tmp/larcenous/Bones/fib.scm.o -o /tmp/larcenous/Bones/fib.exe
Running...
Running fib:40:5
Elapsed time: 29.771751015 seconds (29.0) for fib:40:5
+!CSVLINE!+bones-unknown,fib:40:5,29.771751015

real	0m29.773s
user	0m29.757s
sys	0m0.013s

Testing fibc under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/fibc.scm > /tmp/larcenous/Bones/fibc.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/fibc.scm.s -o /tmp/larcenous/Bones/fibc.scm.o
gcc /tmp/larcenous/Bones/fibc.scm.o -o /tmp/larcenous/Bones/fibc.exe
Running...
Running fibc:30:10
Elapsed time: 2.982484204 seconds (3.0) for fibc:30:10
+!CSVLINE!+bones-unknown,fibc:30:10,2.982484204

real	0m2.984s
user	0m2.973s
sys	0m0.007s

Testing fibfp under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/fibfp.scm > /tmp/larcenous/Bones/fibfp.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/fibfp.scm.s -o /tmp/larcenous/Bones/fibfp.scm.o
gcc /tmp/larcenous/Bones/fibfp.scm.o -o /tmp/larcenous/Bones/fibfp.exe
Running...
Running fibfp:35.0:10
Elapsed time: 7.336301507 seconds (7.0) for fibfp:35.0:10
+!CSVLINE!+bones-unknown,fibfp:35.0:10,7.336301507

real	0m7.337s
user	0m7.327s
sys	0m0.007s

Testing sum under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/sum.scm > /tmp/larcenous/Bones/sum.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/sum.scm.s -o /tmp/larcenous/Bones/sum.scm.o
gcc /tmp/larcenous/Bones/sum.scm.o -o /tmp/larcenous/Bones/sum.exe
Running...
Running sum:10000:200000
Elapsed time: 45.609358509 seconds (45.0) for sum:10000:200000
+!CSVLINE!+bones-unknown,sum:10000:200000,45.609358509

real	0m45.611s
user	0m45.600s
sys	0m0.007s

Testing sumfp under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/sumfp.scm > /tmp/larcenous/Bones/sumfp.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/sumfp.scm.s -o /tmp/larcenous/Bones/sumfp.scm.o
gcc /tmp/larcenous/Bones/sumfp.scm.o -o /tmp/larcenous/Bones/sumfp.exe
Running...
Running sumfp:1000000.0:500
Elapsed time: 14.060423951 seconds (14.0) for sumfp:1000000.0:500
+!CSVLINE!+bones-unknown,sumfp:1000000.0:500,14.060423951

real	0m14.062s
user	0m14.053s
sys	0m0.007s

Testing fft under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/fft.scm > /tmp/larcenous/Bones/fft.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/fft.scm.s -o /tmp/larcenous/Bones/fft.scm.o
gcc /tmp/larcenous/Bones/fft.scm.o -o /tmp/larcenous/Bones/fft.exe
Running...
Running fft:65536:100
Elapsed time: 21.544528826 seconds (21.0) for fft:65536:100
+!CSVLINE!+bones-unknown,fft:65536:100,21.544528826

real	0m21.546s
user	0m21.543s
sys	0m0.000s

Testing mbrot under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/mbrot.scm > /tmp/larcenous/Bones/mbrot.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/mbrot.scm.s -o /tmp/larcenous/Bones/mbrot.scm.o
gcc /tmp/larcenous/Bones/mbrot.scm.o -o /tmp/larcenous/Bones/mbrot.exe
Running...
Running mbrot:75:1000
Elapsed time: 23.793977342 seconds (24.0) for mbrot:75:1000
+!CSVLINE!+bones-unknown,mbrot:75:1000,23.793977342

real	0m23.795s
user	0m23.783s
sys	0m0.010s

Testing mbrotZ under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/mbrotZ.scm > /tmp/larcenous/Bones/mbrotZ.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/mbrotZ.scm.s -o /tmp/larcenous/Bones/mbrotZ.scm.o
/tmp/larcenous/Bones/mbrotZ.scm.s:2336: error: symbol `____2d1_2e0_2d0_2e5i' undefined
/tmp/larcenous/Bones/mbrotZ.scm.s:2855: error: symbol `___make_2drectangular' undefined
/tmp/larcenous/Bones/mbrotZ.scm.s:3092: error: symbol `___real_2dpart' undefined
/tmp/larcenous/Bones/mbrotZ.scm.s:3122: error: symbol `___imag_2dpart' undefined
gcc /tmp/larcenous/Bones/mbrotZ.scm.o -o /tmp/larcenous/Bones/mbrotZ.exe
gcc: error: /tmp/larcenous/Bones/mbrotZ.scm.o: No such file or directory
gcc: fatal error: no input files
compilation terminated.
Running...
./bench: line 490: /tmp/larcenous/Bones/mbrotZ.exe: No such file or directory

real	0m0.001s
user	0m0.000s
sys	0m0.000s

Testing nucleic under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/nucleic.scm > /tmp/larcenous/Bones/nucleic.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/nucleic.scm.s -o /tmp/larcenous/Bones/nucleic.scm.o
gcc /tmp/larcenous/Bones/nucleic.scm.o -o /tmp/larcenous/Bones/nucleic.exe
Running...
Running nucleic:50
Elapsed time: 12.946325559 seconds (13.0) for nucleic:50
+!CSVLINE!+bones-unknown,nucleic:50,12.946325559

real	0m12.948s
user	0m12.943s
sys	0m0.000s

Testing pi under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/pi.scm > /tmp/larcenous/Bones/pi.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/pi.scm.s -o /tmp/larcenous/Bones/pi.scm.o
gcc /tmp/larcenous/Bones/pi.scm.o -o /tmp/larcenous/Bones/pi.exe
Running...
Running pi:50:500:50:2
./bench: line 489: 19100 Floating point exception(core dumped) "$1" < "$2"

real	0m0.096s
user	0m0.000s
sys	0m0.077s

Testing pnpoly under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/pnpoly.scm > /tmp/larcenous/Bones/pnpoly.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/pnpoly.scm.s -o /tmp/larcenous/Bones/pnpoly.scm.o
gcc /tmp/larcenous/Bones/pnpoly.scm.o -o /tmp/larcenous/Bones/pnpoly.exe
Running...
Running pnpoly:1000000
Elapsed time: 18.909444933 seconds (18.0) for pnpoly:1000000
+!CSVLINE!+bones-unknown,pnpoly:1000000,18.909444933

real	0m18.911s
user	0m18.907s
sys	0m0.000s

Testing ray under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/ray.scm > /tmp/larcenous/Bones/ray.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/ray.scm.s -o /tmp/larcenous/Bones/ray.scm.o
/tmp/larcenous/Bones/ray.scm.s:23550: error: invalid character in floating-point constant exponent: '.'
gcc /tmp/larcenous/Bones/ray.scm.o -o /tmp/larcenous/Bones/ray.exe
gcc: error: /tmp/larcenous/Bones/ray.scm.o: No such file or directory
gcc: fatal error: no input files
compilation terminated.
Running...
./bench: line 490: /tmp/larcenous/Bones/ray.exe: No such file or directory

real	0m0.000s
user	0m0.000s
sys	0m0.000s

Testing simplex under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/simplex.scm > /tmp/larcenous/Bones/simplex.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/simplex.scm.s -o /tmp/larcenous/Bones/simplex.scm.o
gcc /tmp/larcenous/Bones/simplex.scm.o -o /tmp/larcenous/Bones/simplex.exe
Running...
Running simplex:1000000
Elapsed time: 18.456174261 seconds (18.0) for simplex:1000000
+!CSVLINE!+bones-unknown,simplex:1000000,18.456174261

real	0m18.457s
user	0m18.450s
sys	0m0.003s

Testing ack under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/ack.scm > /tmp/larcenous/Bones/ack.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/ack.scm.s -o /tmp/larcenous/Bones/ack.scm.o
gcc /tmp/larcenous/Bones/ack.scm.o -o /tmp/larcenous/Bones/ack.exe
Running...
Running ack:3:12:2
Elapsed time: 51.729803214 seconds (51.0) for ack:3:12:2
+!CSVLINE!+bones-unknown,ack:3:12:2,51.729803214

real	0m51.731s
user	0m51.723s
sys	0m0.003s

Testing array1 under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/array1.scm > /tmp/larcenous/Bones/array1.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/array1.scm.s -o /tmp/larcenous/Bones/array1.scm.o
gcc /tmp/larcenous/Bones/array1.scm.o -o /tmp/larcenous/Bones/array1.exe
Running...
Running array1:1000000:500
Elapsed time: 27.381097743 seconds (28.0) for array1:1000000:500
+!CSVLINE!+bones-unknown,array1:1000000:500,27.381097743

real	0m27.382s
user	0m27.370s
sys	0m0.010s

Testing string under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/string.scm > /tmp/larcenous/Bones/string.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/string.scm.s -o /tmp/larcenous/Bones/string.scm.o
gcc /tmp/larcenous/Bones/string.scm.o -o /tmp/larcenous/Bones/string.exe
Running...
Running string:500000:25
Elapsed time: 0.109311111 seconds (0.0) for string:500000:25
+!CSVLINE!+bones-unknown,string:500000:25,0.109311111

real	0m0.111s
user	0m0.103s
sys	0m0.007s

Testing sum1 under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/sum1.scm > /tmp/larcenous/Bones/sum1.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/sum1.scm.s -o /tmp/larcenous/Bones/sum1.scm.o
gcc /tmp/larcenous/Bones/sum1.scm.o -o /tmp/larcenous/Bones/sum1.exe
Running...
Running sum1:25
Elapsed time: 17.510804267 seconds (18.0) for sum1:25
+!CSVLINE!+bones-unknown,sum1:25,17.510804267

real	0m17.512s
user	0m10.687s
sys	0m6.823s

Testing cat under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/cat.scm > /tmp/larcenous/Bones/cat.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/cat.scm.s -o /tmp/larcenous/Bones/cat.scm.o
gcc /tmp/larcenous/Bones/cat.scm.o -o /tmp/larcenous/Bones/cat.exe
Running...
Running cat:50
Elapsed time: 221.097810799 seconds (221.0) for cat:50
+!CSVLINE!+bones-unknown,cat:50,221.097810799

real	3m41.099s
user	0m19.743s
sys	3m21.313s

Testing tail under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/tail.scm > /tmp/larcenous/Bones/tail.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/tail.scm.s -o /tmp/larcenous/Bones/tail.scm.o
/tmp/larcenous/Bones/tail.scm.s:2502: error: symbol `___read_2dline' undefined
gcc /tmp/larcenous/Bones/tail.scm.o -o /tmp/larcenous/Bones/tail.exe
gcc: error: /tmp/larcenous/Bones/tail.scm.o: No such file or directory
gcc: fatal error: no input files
compilation terminated.
Running...
./bench: line 490: /tmp/larcenous/Bones/tail.exe: No such file or directory

real	0m0.000s
user	0m0.000s
sys	0m0.000s

Testing wc under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/wc.scm > /tmp/larcenous/Bones/wc.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/wc.scm.s -o /tmp/larcenous/Bones/wc.scm.o
gcc /tmp/larcenous/Bones/wc.scm.o -o /tmp/larcenous/Bones/wc.exe
Running...
Running wc:inputs/bib:50
Elapsed time: 52.856932898 seconds (53.0) for wc:inputs/bib:50
+!CSVLINE!+bones-unknown,wc:inputs/bib:50,52.856932898

real	0m52.858s
user	0m14.780s
sys	0m38.073s

Testing read1 under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/read1.scm > /tmp/larcenous/Bones/read1.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/read1.scm.s -o /tmp/larcenous/Bones/read1.scm.o
gcc /tmp/larcenous/Bones/read1.scm.o -o /tmp/larcenous/Bones/read1.exe
Running...
Running read1:2500
Elapsed time: 21.091595643 seconds (21.0) for read1:2500
+!CSVLINE!+bones-unknown,read1:2500,21.091595643

real	0m21.093s
user	0m10.047s
sys	0m11.043s

Testing compiler under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/compiler.scm > /tmp/larcenous/Bones/compiler.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/compiler.scm.s -o /tmp/larcenous/Bones/compiler.scm.o
/tmp/larcenous/Bones/compiler.scm.s:76316: error: symbol `___real_2dpart' undefined
/tmp/larcenous/Bones/compiler.scm.s:76350: error: symbol `___imag_2dpart' undefined
/tmp/larcenous/Bones/compiler.scm.s:76458: error: symbol `___numerator' undefined
/tmp/larcenous/Bones/compiler.scm.s:76492: error: symbol `___denominator' undefined
/tmp/larcenous/Bones/compiler.scm.s:107201: error: symbol `___real_2dpart' undefined
/tmp/larcenous/Bones/compiler.scm.s:107250: error: symbol `___imag_2dpart' undefined
/tmp/larcenous/Bones/compiler.scm.s:107296: error: symbol `___imag_2dpart' undefined
gcc /tmp/larcenous/Bones/compiler.scm.o -o /tmp/larcenous/Bones/compiler.exe
gcc: error: /tmp/larcenous/Bones/compiler.scm.o: No such file or directory
gcc: fatal error: no input files
compilation terminated.
Running...
./bench: line 490: /tmp/larcenous/Bones/compiler.exe: No such file or directory

real	0m0.000s
user	0m0.000s
sys	0m0.000s

Testing conform under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/conform.scm > /tmp/larcenous/Bones/conform.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/conform.scm.s -o /tmp/larcenous/Bones/conform.scm.o
gcc /tmp/larcenous/Bones/conform.scm.o -o /tmp/larcenous/Bones/conform.exe
Running...
Running conform:500
Elapsed time: 12.573270917 seconds (13.0) for conform:500
+!CSVLINE!+bones-unknown,conform:500,12.573270917

real	0m12.575s
user	0m12.563s
sys	0m0.007s

Testing dynamic under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/dynamic.scm > /tmp/larcenous/Bones/dynamic.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/dynamic.scm.s -o /tmp/larcenous/Bones/dynamic.scm.o
gcc /tmp/larcenous/Bones/dynamic.scm.o -o /tmp/larcenous/Bones/dynamic.exe
Running...
Running dynamic:500
Elapsed time: 34.473343581 seconds (35.0) for dynamic:500
+!CSVLINE!+bones-unknown,dynamic:500,34.473343581

real	0m34.475s
user	0m25.140s
sys	0m9.330s

Testing earley under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/earley.scm > /tmp/larcenous/Bones/earley.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/earley.scm.s -o /tmp/larcenous/Bones/earley.scm.o
gcc /tmp/larcenous/Bones/earley.scm.o -o /tmp/larcenous/Bones/earley.exe
Running...
Running earley:1

Error: out of memory

real	0m10.534s
user	0m10.523s
sys	0m0.007s

Testing graphs under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/graphs.scm > /tmp/larcenous/Bones/graphs.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/graphs.scm.s -o /tmp/larcenous/Bones/graphs.scm.o
gcc /tmp/larcenous/Bones/graphs.scm.o -o /tmp/larcenous/Bones/graphs.exe
Running...
Running graphs:7:3
Elapsed time: 35.709716598 seconds (36.0) for graphs:7:3
+!CSVLINE!+bones-unknown,graphs:7:3,35.709716598

real	0m35.711s
user	0m35.703s
sys	0m0.003s

Testing lattice under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/lattice.scm > /tmp/larcenous/Bones/lattice.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/lattice.scm.s -o /tmp/larcenous/Bones/lattice.scm.o
gcc /tmp/larcenous/Bones/lattice.scm.o -o /tmp/larcenous/Bones/lattice.exe
Running...
Running lattice:44:10
Elapsed time: 37.216007435 seconds (38.0) for lattice:44:10
+!CSVLINE!+bones-unknown,lattice:44:10,37.216007435

real	0m37.217s
user	0m37.213s
sys	0m0.000s

Testing matrix under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/matrix.scm > /tmp/larcenous/Bones/matrix.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/matrix.scm.s -o /tmp/larcenous/Bones/matrix.scm.o
gcc /tmp/larcenous/Bones/matrix.scm.o -o /tmp/larcenous/Bones/matrix.exe
Running...
Running matrix:5:5:2500
Elapsed time: 10.990820605 seconds (11.0) for matrix:5:5:2500
+!CSVLINE!+bones-unknown,matrix:5:5:2500,10.990820605

real	0m10.992s
user	0m10.987s
sys	0m0.003s

Testing maze under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/maze.scm > /tmp/larcenous/Bones/maze.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/maze.scm.s -o /tmp/larcenous/Bones/maze.scm.o
gcc /tmp/larcenous/Bones/maze.scm.o -o /tmp/larcenous/Bones/maze.exe
Running...
Running maze:20:7:10000
Elapsed time: 9.352551374000001 seconds (10.0) for maze:20:7:10000
+!CSVLINE!+bones-unknown,maze:20:7:10000,9.352551374000001

real	0m9.356s
user	0m9.353s
sys	0m0.000s

Testing mazefun under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/mazefun.scm > /tmp/larcenous/Bones/mazefun.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/mazefun.scm.s -o /tmp/larcenous/Bones/mazefun.scm.o
gcc /tmp/larcenous/Bones/mazefun.scm.o -o /tmp/larcenous/Bones/mazefun.exe
Running...
Running mazefun:11:11:10000
Elapsed time: 13.838372161 seconds (14.0) for mazefun:11:11:10000
+!CSVLINE!+bones-unknown,mazefun:11:11:10000,13.838372161

real	0m13.840s
user	0m13.833s
sys	0m0.003s

Testing nqueens under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/nqueens.scm > /tmp/larcenous/Bones/nqueens.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/nqueens.scm.s -o /tmp/larcenous/Bones/nqueens.scm.o
gcc /tmp/larcenous/Bones/nqueens.scm.o -o /tmp/larcenous/Bones/nqueens.exe
Running...
Running nqueens:13:10
Elapsed time: 40.901440827 seconds (40.0) for nqueens:13:10
+!CSVLINE!+bones-unknown,nqueens:13:10,40.901440827

real	0m40.903s
user	0m40.893s
sys	0m0.003s

Testing paraffins under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/paraffins.scm > /tmp/larcenous/Bones/paraffins.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/paraffins.scm.s -o /tmp/larcenous/Bones/paraffins.scm.o
gcc /tmp/larcenous/Bones/paraffins.scm.o -o /tmp/larcenous/Bones/paraffins.exe
Running...
Running paraffins:23:10

Error: out of memory

real	0m1.751s
user	0m1.747s
sys	0m0.003s

Testing parsing under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/parsing.scm > /tmp/larcenous/Bones/parsing.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/parsing.scm.s -o /tmp/larcenous/Bones/parsing.scm.o
gcc /tmp/larcenous/Bones/parsing.scm.o -o /tmp/larcenous/Bones/parsing.exe
Running...
Running parsing:2500
Elapsed time: 26.565655317 seconds (26.0) for parsing:2500
+!CSVLINE!+bones-unknown,parsing:2500,26.565655317

real	0m26.567s
user	0m26.550s
sys	0m0.013s

Testing peval under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/peval.scm > /tmp/larcenous/Bones/peval.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/peval.scm.s -o /tmp/larcenous/Bones/peval.scm.o
gcc /tmp/larcenous/Bones/peval.scm.o -o /tmp/larcenous/Bones/peval.exe
Running...
Running peval:2000
Elapsed time: 5.120314529 seconds (5.0) for peval:2000
+!CSVLINE!+bones-unknown,peval:2000,5.120314529

real	0m5.121s
user	0m5.120s
sys	0m0.000s

Testing primes under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/primes.scm > /tmp/larcenous/Bones/primes.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/primes.scm.s -o /tmp/larcenous/Bones/primes.scm.o
gcc /tmp/larcenous/Bones/primes.scm.o -o /tmp/larcenous/Bones/primes.exe
Running...
Running primes:1000:10000
Elapsed time: 5.942763865 seconds (6.0) for primes:1000:10000
+!CSVLINE!+bones-unknown,primes:1000:10000,5.942763865

real	0m5.944s
user	0m5.937s
sys	0m0.007s

Testing quicksort under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/quicksort.scm > /tmp/larcenous/Bones/quicksort.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/quicksort.scm.s -o /tmp/larcenous/Bones/quicksort.scm.o
/tmp/larcenous/Bones/quicksort.scm.s:2743: error: symbol `___vector_2dmap' undefined
gcc /tmp/larcenous/Bones/quicksort.scm.o -o /tmp/larcenous/Bones/quicksort.exe
gcc: error: /tmp/larcenous/Bones/quicksort.scm.o: No such file or directory
gcc: fatal error: no input files
compilation terminated.
Running...
./bench: line 490: /tmp/larcenous/Bones/quicksort.exe: No such file or directory

real	0m0.000s
user	0m0.000s
sys	0m0.000s

Testing scheme under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/scheme.scm > /tmp/larcenous/Bones/scheme.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/scheme.scm.s -o /tmp/larcenous/Bones/scheme.scm.o
/tmp/larcenous/Bones/scheme.scm.s:3607: error: symbol `___complex_3f' undefined
gcc /tmp/larcenous/Bones/scheme.scm.o -o /tmp/larcenous/Bones/scheme.exe
gcc: error: /tmp/larcenous/Bones/scheme.scm.o: No such file or directory
gcc: fatal error: no input files
compilation terminated.
Running...
./bench: line 490: /tmp/larcenous/Bones/scheme.exe: No such file or directory

real	0m0.000s
user	0m0.000s
sys	0m0.000s

Testing slatex under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/slatex.scm > /tmp/larcenous/Bones/slatex.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/slatex.scm.s -o /tmp/larcenous/Bones/slatex.scm.o
gcc /tmp/larcenous/Bones/slatex.scm.o -o /tmp/larcenous/Bones/slatex.exe
Running...
Running slatex:500
Elapsed time: 12.296277665 seconds (12.0) for slatex:500
+!CSVLINE!+bones-unknown,slatex:500,12.296277665

real	0m12.297s
user	0m3.457s
sys	0m8.753s

Testing nboyer under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/nboyer.scm > /tmp/larcenous/Bones/nboyer.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/nboyer.scm.s -o /tmp/larcenous/Bones/nboyer.scm.o
gcc /tmp/larcenous/Bones/nboyer.scm.o -o /tmp/larcenous/Bones/nboyer.exe
Running...
Running nboyer:5:1

Error: out of memory

real	0m8.185s
user	0m8.180s
sys	0m0.000s

Testing sboyer under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/sboyer.scm > /tmp/larcenous/Bones/sboyer.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/sboyer.scm.s -o /tmp/larcenous/Bones/sboyer.scm.o
gcc /tmp/larcenous/Bones/sboyer.scm.o -o /tmp/larcenous/Bones/sboyer.exe
Running...
Running sboyer:5:1

Error: out of memory

real	0m37.319s
user	0m37.310s
sys	0m0.003s

Testing gcbench under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/gcbench.scm > /tmp/larcenous/Bones/gcbench.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/gcbench.scm.s -o /tmp/larcenous/Bones/gcbench.scm.o
/tmp/larcenous/Bones/gcbench.scm.s:2877: error: symbol `___make_2dnode_2draw' undefined
/tmp/larcenous/Bones/gcbench.scm.s:2878: error: symbol `___left' undefined
/tmp/larcenous/Bones/gcbench.scm.s:2879: error: symbol `___right' undefined
/tmp/larcenous/Bones/gcbench.scm.s:2880: error: symbol `___i' undefined
/tmp/larcenous/Bones/gcbench.scm.s:2881: error: symbol `___j' undefined
/tmp/larcenous/Bones/gcbench.scm.s:2909: error: symbol `___left' undefined
/tmp/larcenous/Bones/gcbench.scm.s:2910: error: symbol `___node_2eleft' undefined
/tmp/larcenous/Bones/gcbench.scm.s:2911: error: symbol `___node_2eleft_2dset_21' undefined
/tmp/larcenous/Bones/gcbench.scm.s:2943: error: symbol `___right' undefined
/tmp/larcenous/Bones/gcbench.scm.s:2944: error: symbol `___node_2eright' undefined
/tmp/larcenous/Bones/gcbench.scm.s:2945: error: symbol `___node_2eright_2dset_21' undefined
/tmp/larcenous/Bones/gcbench.scm.s:2979: error: symbol `___i' undefined
/tmp/larcenous/Bones/gcbench.scm.s:2980: error: symbol `___node_2ei' undefined
/tmp/larcenous/Bones/gcbench.scm.s:2981: error: symbol `___node_2ei_2dset_21' undefined
/tmp/larcenous/Bones/gcbench.scm.s:3017: error: symbol `___j' undefined
/tmp/larcenous/Bones/gcbench.scm.s:3018: error: symbol `___node_2ej' undefined
/tmp/larcenous/Bones/gcbench.scm.s:3019: error: symbol `___node_2ej_2dset_21' undefined
/tmp/larcenous/Bones/gcbench.scm.s:3029: error: symbol `___class_4eode' undefined
/tmp/larcenous/Bones/gcbench.scm.s:3031: error: symbol `___class_4eode_3f' undefined
/tmp/larcenous/Bones/gcbench.scm.s:3053: error: symbol `___define_2drecord_2dtype' undefined
/tmp/larcenous/Bones/gcbench.scm.s:5525: error: symbol `___node_2eleft_2dset_21' undefined
/tmp/larcenous/Bones/gcbench.scm.s:5575: error: symbol `___node_2eright_2dset_21' undefined
/tmp/larcenous/Bones/gcbench.scm.s:5597: error: symbol `___node_2eleft' undefined
/tmp/larcenous/Bones/gcbench.scm.s:5650: error: symbol `___node_2eright' undefined
/tmp/larcenous/Bones/gcbench.scm.s:5680: error: symbol `___make_2dnode_2draw' undefined
/tmp/larcenous/Bones/gcbench.scm.s:5694: error: symbol `___make_2dnode_2draw' undefined
gcc /tmp/larcenous/Bones/gcbench.scm.o -o /tmp/larcenous/Bones/gcbench.exe
gcc: error: /tmp/larcenous/Bones/gcbench.scm.o: No such file or directory
gcc: fatal error: no input files
compilation terminated.
Running...
./bench: line 490: /tmp/larcenous/Bones/gcbench.exe: No such file or directory

real	0m0.000s
user	0m0.000s
sys	0m0.000s

Testing mperm under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/mperm.scm > /tmp/larcenous/Bones/mperm.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/mperm.scm.s -o /tmp/larcenous/Bones/mperm.scm.o
gcc /tmp/larcenous/Bones/mperm.scm.o -o /tmp/larcenous/Bones/mperm.exe
Running...

Error: out of memory

real	0m4.317s
user	0m4.300s
sys	0m0.013s

Testing equal under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/equal.scm > /tmp/larcenous/Bones/equal.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/equal.scm.s -o /tmp/larcenous/Bones/equal.scm.o
gcc /tmp/larcenous/Bones/equal.scm.o -o /tmp/larcenous/Bones/equal.exe
Running...
Running equal:100:100:8:1000:2000:5000
./bench: line 489: 20565 Killed                  "$1" < "$2"

real	10m0.000s
user	9m59.950s
sys	0m0.003s

Testing bv2string under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/bv2string.scm > /tmp/larcenous/Bones/bv2string.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/bv2string.scm.s -o /tmp/larcenous/Bones/bv2string.scm.o
/tmp/larcenous/Bones/bv2string.scm.s:2864: error: symbol `___utf8_2d_3estring' undefined
/tmp/larcenous/Bones/bv2string.scm.s:2865: error: symbol `___string_2d_3eutf8' undefined
/tmp/larcenous/Bones/bv2string.scm.s:3008: error: symbol `___utf8_2d_3estring' undefined
/tmp/larcenous/Bones/bv2string.scm.s:3009: error: symbol `___string_2d_3eutf8' undefined
gcc /tmp/larcenous/Bones/bv2string.scm.o -o /tmp/larcenous/Bones/bv2string.exe
gcc: error: /tmp/larcenous/Bones/bv2string.scm.o: No such file or directory
gcc: fatal error: no input files
compilation terminated.
Running...
./bench: line 490: /tmp/larcenous/Bones/bv2string.exe: No such file or directory

real	0m0.000s
user	0m0.000s
sys	0m0.000s
