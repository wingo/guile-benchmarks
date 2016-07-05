
****************************
Benchmarking Bones on Fri 1 Jul 14:20:32 CEST 2016 under Linux nexion 4.6.2-1-ARCH #1 SMP PREEMPT Wed Jun 8 08:40:59 CEST 2016 x86_64 GNU/Linux

Testing browse under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/browse.scm > /tmp/larcenous/Bones/browse.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/browse.scm.s -o /tmp/larcenous/Bones/browse.scm.o
gcc /tmp/larcenous/Bones/browse.scm.o -o /tmp/larcenous/Bones/browse.exe
Running...
Running browse:2000
Elapsed time: 0.589609457 seconds (0.0) for browse:2000
+!CSVLINE!+bones-unknown,browse:2000,0.589609457

real	0m0.591s
user	0m0.580s
sys	0m0.010s

Testing deriv under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/deriv.scm > /tmp/larcenous/Bones/deriv.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/deriv.scm.s -o /tmp/larcenous/Bones/deriv.scm.o
gcc /tmp/larcenous/Bones/deriv.scm.o -o /tmp/larcenous/Bones/deriv.exe
Running...
Running deriv:10000000
Elapsed time: 3.817459175 seconds (3.0) for deriv:10000000
+!CSVLINE!+bones-unknown,deriv:10000000,3.817459175

real	0m3.818s
user	0m3.817s
sys	0m0.000s

Testing destruc under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/destruc.scm > /tmp/larcenous/Bones/destruc.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/destruc.scm.s -o /tmp/larcenous/Bones/destruc.scm.o
gcc /tmp/larcenous/Bones/destruc.scm.o -o /tmp/larcenous/Bones/destruc.exe
Running...
Running destruc:600:50:4000
Elapsed time: 7.901076099 seconds (8.0) for destruc:600:50:4000
+!CSVLINE!+bones-unknown,destruc:600:50:4000,7.901076099

real	0m7.902s
user	0m7.900s
sys	0m0.000s

Testing diviter under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/diviter.scm > /tmp/larcenous/Bones/diviter.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/diviter.scm.s -o /tmp/larcenous/Bones/diviter.scm.o
gcc /tmp/larcenous/Bones/diviter.scm.o -o /tmp/larcenous/Bones/diviter.exe
Running...
Running diviter:1000:1000000
Elapsed time: 2.267702618 seconds (2.0) for diviter:1000:1000000
+!CSVLINE!+bones-unknown,diviter:1000:1000000,2.267702618

real	0m2.269s
user	0m2.267s
sys	0m0.000s

Testing divrec under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/divrec.scm > /tmp/larcenous/Bones/divrec.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/divrec.scm.s -o /tmp/larcenous/Bones/divrec.scm.o
gcc /tmp/larcenous/Bones/divrec.scm.o -o /tmp/larcenous/Bones/divrec.exe
Running...
Running divrec:1000:1000000
Elapsed time: 4.574282235 seconds (4.0) for divrec:1000:1000000
+!CSVLINE!+bones-unknown,divrec:1000:1000000,4.574282235

real	0m4.575s
user	0m4.567s
sys	0m0.007s

Testing puzzle under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/puzzle.scm > /tmp/larcenous/Bones/puzzle.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/puzzle.scm.s -o /tmp/larcenous/Bones/puzzle.scm.o
gcc /tmp/larcenous/Bones/puzzle.scm.o -o /tmp/larcenous/Bones/puzzle.exe
Running...
Running puzzle:1000
Elapsed time: 13.164580577 seconds (13.0) for puzzle:1000
+!CSVLINE!+bones-unknown,puzzle:1000,13.164580577

real	0m13.165s
user	0m13.160s
sys	0m0.003s

Testing triangl under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/triangl.scm > /tmp/larcenous/Bones/triangl.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/triangl.scm.s -o /tmp/larcenous/Bones/triangl.scm.o
gcc /tmp/larcenous/Bones/triangl.scm.o -o /tmp/larcenous/Bones/triangl.exe
Running...
Running triangl:22:1:50
Elapsed time: 9.68109733 seconds (9.0) for triangl:22:1:50
+!CSVLINE!+bones-unknown,triangl:22:1:50,9.68109733

real	0m9.682s
user	0m9.677s
sys	0m0.003s

Testing tak under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/tak.scm > /tmp/larcenous/Bones/tak.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/tak.scm.s -o /tmp/larcenous/Bones/tak.scm.o
gcc /tmp/larcenous/Bones/tak.scm.o -o /tmp/larcenous/Bones/tak.exe
Running...
Running tak:40:20:11:1
Elapsed time: 10.967880106 seconds (11.0) for tak:40:20:11:1
+!CSVLINE!+bones-unknown,tak:40:20:11:1,10.967880106

real	0m10.969s
user	0m10.960s
sys	0m0.007s

Testing takl under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/takl.scm > /tmp/larcenous/Bones/takl.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/takl.scm.s -o /tmp/larcenous/Bones/takl.scm.o
gcc /tmp/larcenous/Bones/takl.scm.o -o /tmp/larcenous/Bones/takl.exe
Running...
Running takl:40:20:12:1
Elapsed time: 7.891741116 seconds (8.0) for takl:40:20:12:1
+!CSVLINE!+bones-unknown,takl:40:20:12:1,7.891741116

real	0m7.893s
user	0m7.880s
sys	0m0.010s

Testing ntakl under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/ntakl.scm > /tmp/larcenous/Bones/ntakl.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/ntakl.scm.s -o /tmp/larcenous/Bones/ntakl.scm.o
gcc /tmp/larcenous/Bones/ntakl.scm.o -o /tmp/larcenous/Bones/ntakl.exe
Running...
Running ntakl:40:20:12:1
Elapsed time: 7.409746624 seconds (7.0) for ntakl:40:20:12:1
+!CSVLINE!+bones-unknown,ntakl:40:20:12:1,7.409746624

real	0m7.411s
user	0m7.403s
sys	0m0.007s

Testing cpstak under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/cpstak.scm > /tmp/larcenous/Bones/cpstak.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/cpstak.scm.s -o /tmp/larcenous/Bones/cpstak.scm.o
gcc /tmp/larcenous/Bones/cpstak.scm.o -o /tmp/larcenous/Bones/cpstak.exe
Running...
Running cpstak:40:20:11:1
Elapsed time: 14.285398216 seconds (15.0) for cpstak:40:20:11:1
+!CSVLINE!+bones-unknown,cpstak:40:20:11:1,14.285398216

real	0m14.286s
user	0m14.280s
sys	0m0.007s

Testing ctak under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/ctak.scm > /tmp/larcenous/Bones/ctak.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/ctak.scm.s -o /tmp/larcenous/Bones/ctak.scm.o
gcc /tmp/larcenous/Bones/ctak.scm.o -o /tmp/larcenous/Bones/ctak.exe
Running...
Running ctak:32:16:8:1
Elapsed time: 1.718370835 seconds (2.0) for ctak:32:16:8:1
+!CSVLINE!+bones-unknown,ctak:32:16:8:1,1.718370835

real	0m1.719s
user	0m1.710s
sys	0m0.007s

Testing fib under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/fib.scm > /tmp/larcenous/Bones/fib.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/fib.scm.s -o /tmp/larcenous/Bones/fib.scm.o
gcc /tmp/larcenous/Bones/fib.scm.o -o /tmp/larcenous/Bones/fib.exe
Running...
Running fib:40:5
Elapsed time: 23.853182501 seconds (24.0) for fib:40:5
+!CSVLINE!+bones-unknown,fib:40:5,23.853182501

real	0m23.854s
user	0m23.847s
sys	0m0.007s

Testing fibc under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/fibc.scm > /tmp/larcenous/Bones/fibc.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/fibc.scm.s -o /tmp/larcenous/Bones/fibc.scm.o
gcc /tmp/larcenous/Bones/fibc.scm.o -o /tmp/larcenous/Bones/fibc.exe
Running...
Running fibc:30:10
Elapsed time: 1.830396123 seconds (2.0) for fibc:30:10
+!CSVLINE!+bones-unknown,fibc:30:10,1.830396123

real	0m1.831s
user	0m1.827s
sys	0m0.003s

Testing fibfp under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/fibfp.scm > /tmp/larcenous/Bones/fibfp.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/fibfp.scm.s -o /tmp/larcenous/Bones/fibfp.scm.o
gcc /tmp/larcenous/Bones/fibfp.scm.o -o /tmp/larcenous/Bones/fibfp.exe
Running...
Running fibfp:35.0:10
Elapsed time: 5.393007548 seconds (6.0) for fibfp:35.0:10
+!CSVLINE!+bones-unknown,fibfp:35.0:10,5.393007548

real	0m5.394s
user	0m5.390s
sys	0m0.003s

Testing sum under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/sum.scm > /tmp/larcenous/Bones/sum.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/sum.scm.s -o /tmp/larcenous/Bones/sum.scm.o
gcc /tmp/larcenous/Bones/sum.scm.o -o /tmp/larcenous/Bones/sum.exe
Running...
Running sum:10000:200000
Elapsed time: 32.474639878 seconds (33.0) for sum:10000:200000
+!CSVLINE!+bones-unknown,sum:10000:200000,32.474639878

real	0m32.476s
user	0m32.473s
sys	0m0.003s

Testing sumfp under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/sumfp.scm > /tmp/larcenous/Bones/sumfp.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/sumfp.scm.s -o /tmp/larcenous/Bones/sumfp.scm.o
gcc /tmp/larcenous/Bones/sumfp.scm.o -o /tmp/larcenous/Bones/sumfp.exe
Running...
Running sumfp:1000000.0:500
Elapsed time: 9.821292847 seconds (10.0) for sumfp:1000000.0:500
+!CSVLINE!+bones-unknown,sumfp:1000000.0:500,9.821292847

real	0m9.822s
user	0m9.817s
sys	0m0.003s

Testing fft under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/fft.scm > /tmp/larcenous/Bones/fft.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/fft.scm.s -o /tmp/larcenous/Bones/fft.scm.o
gcc /tmp/larcenous/Bones/fft.scm.o -o /tmp/larcenous/Bones/fft.exe
Running...
Running fft:65536:100
Elapsed time: 12.46890793 seconds (13.0) for fft:65536:100
+!CSVLINE!+bones-unknown,fft:65536:100,12.46890793

real	0m12.470s
user	0m12.467s
sys	0m0.003s

Testing mbrot under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/mbrot.scm > /tmp/larcenous/Bones/mbrot.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/mbrot.scm.s -o /tmp/larcenous/Bones/mbrot.scm.o
gcc /tmp/larcenous/Bones/mbrot.scm.o -o /tmp/larcenous/Bones/mbrot.exe
Running...
Running mbrot:75:1000
Elapsed time: 16.351877435 seconds (16.0) for mbrot:75:1000
+!CSVLINE!+bones-unknown,mbrot:75:1000,16.351877435

real	0m16.353s
user	0m16.350s
sys	0m0.003s

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
+!CSVLINE!+bones,mbrotZ,COMPILEERROR

Testing nucleic under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/nucleic.scm > /tmp/larcenous/Bones/nucleic.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/nucleic.scm.s -o /tmp/larcenous/Bones/nucleic.scm.o
gcc /tmp/larcenous/Bones/nucleic.scm.o -o /tmp/larcenous/Bones/nucleic.exe
Running...
Running nucleic:50
Elapsed time: 6.969181069 seconds (7.0) for nucleic:50
+!CSVLINE!+bones-unknown,nucleic:50,6.969181069

real	0m6.970s
user	0m6.970s
sys	0m0.000s

Testing pi under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/pi.scm > /tmp/larcenous/Bones/pi.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/pi.scm.s -o /tmp/larcenous/Bones/pi.scm.o
gcc /tmp/larcenous/Bones/pi.scm.o -o /tmp/larcenous/Bones/pi.exe
Running...
Running pi:50:500:50:2
./bench: line 506: 16046 Floating point exception(core dumped) "$1" < "$2"

real	0m0.065s
user	0m0.000s
sys	0m0.050s
+!CSVLINE!+bones,pi,CRASHED

Testing pnpoly under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/pnpoly.scm > /tmp/larcenous/Bones/pnpoly.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/pnpoly.scm.s -o /tmp/larcenous/Bones/pnpoly.scm.o
gcc /tmp/larcenous/Bones/pnpoly.scm.o -o /tmp/larcenous/Bones/pnpoly.exe
Running...
Running pnpoly:1000000
Elapsed time: 13.601604082 seconds (13.0) for pnpoly:1000000
+!CSVLINE!+bones-unknown,pnpoly:1000000,13.601604082

real	0m13.603s
user	0m13.600s
sys	0m0.003s

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
+!CSVLINE!+bones,ray,COMPILEERROR

Testing simplex under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/simplex.scm > /tmp/larcenous/Bones/simplex.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/simplex.scm.s -o /tmp/larcenous/Bones/simplex.scm.o
gcc /tmp/larcenous/Bones/simplex.scm.o -o /tmp/larcenous/Bones/simplex.exe
Running...
Running simplex:1000000
Elapsed time: 10.8879126 seconds (11.0) for simplex:1000000
+!CSVLINE!+bones-unknown,simplex:1000000,10.8879126

real	0m10.889s
user	0m10.880s
sys	0m0.007s

Testing ack under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/ack.scm > /tmp/larcenous/Bones/ack.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/ack.scm.s -o /tmp/larcenous/Bones/ack.scm.o
gcc /tmp/larcenous/Bones/ack.scm.o -o /tmp/larcenous/Bones/ack.exe
Running...
Running ack:3:12:2
Elapsed time: 25.234848537 seconds (25.0) for ack:3:12:2
+!CSVLINE!+bones-unknown,ack:3:12:2,25.234848537

real	0m25.236s
user	0m25.230s
sys	0m0.007s

Testing array1 under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/array1.scm > /tmp/larcenous/Bones/array1.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/array1.scm.s -o /tmp/larcenous/Bones/array1.scm.o
gcc /tmp/larcenous/Bones/array1.scm.o -o /tmp/larcenous/Bones/array1.exe
Running...
Running array1:1000000:500
Elapsed time: 19.991553126 seconds (20.0) for array1:1000000:500
+!CSVLINE!+bones-unknown,array1:1000000:500,19.991553126

real	0m19.992s
user	0m19.987s
sys	0m0.007s

Testing string under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/string.scm > /tmp/larcenous/Bones/string.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/string.scm.s -o /tmp/larcenous/Bones/string.scm.o
gcc /tmp/larcenous/Bones/string.scm.o -o /tmp/larcenous/Bones/string.exe
Running...
Running string:500000:25
Elapsed time: 0.058731796 seconds (0.0) for string:500000:25
+!CSVLINE!+bones-unknown,string:500000:25,0.058731796

real	0m0.060s
user	0m0.053s
sys	0m0.003s

Testing sum1 under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/sum1.scm > /tmp/larcenous/Bones/sum1.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/sum1.scm.s -o /tmp/larcenous/Bones/sum1.scm.o
gcc /tmp/larcenous/Bones/sum1.scm.o -o /tmp/larcenous/Bones/sum1.exe
Running...
Running sum1:25
Elapsed time: 10.611932207 seconds (11.0) for sum1:25
+!CSVLINE!+bones-unknown,sum1:25,10.611932207

real	0m10.613s
user	0m7.300s
sys	0m3.313s

Testing cat under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/cat.scm > /tmp/larcenous/Bones/cat.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/cat.scm.s -o /tmp/larcenous/Bones/cat.scm.o
gcc /tmp/larcenous/Bones/cat.scm.o -o /tmp/larcenous/Bones/cat.exe
Running...
Running cat:50
Elapsed time: 169.836786854 seconds (170.0) for cat:50
+!CSVLINE!+bones-unknown,cat:50,169.836786854

real	2m49.838s
user	0m17.573s
sys	2m32.263s

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
+!CSVLINE!+bones,tail,COMPILEERROR

Testing wc under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/wc.scm > /tmp/larcenous/Bones/wc.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/wc.scm.s -o /tmp/larcenous/Bones/wc.scm.o
gcc /tmp/larcenous/Bones/wc.scm.o -o /tmp/larcenous/Bones/wc.exe
Running...
Running wc:inputs/bib:50
Elapsed time: 37.582495311 seconds (38.0) for wc:inputs/bib:50
+!CSVLINE!+bones-unknown,wc:inputs/bib:50,37.582495311

real	0m37.583s
user	0m11.177s
sys	0m26.407s

Testing read1 under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/read1.scm > /tmp/larcenous/Bones/read1.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/read1.scm.s -o /tmp/larcenous/Bones/read1.scm.o
gcc /tmp/larcenous/Bones/read1.scm.o -o /tmp/larcenous/Bones/read1.exe
Running...
Running read1:2500
Elapsed time: 19.984471008 seconds (20.0) for read1:2500
+!CSVLINE!+bones-unknown,read1:2500,19.984471008

real	0m19.985s
user	0m10.430s
sys	0m9.553s

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
+!CSVLINE!+bones,compiler,COMPILEERROR

Testing conform under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/conform.scm > /tmp/larcenous/Bones/conform.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/conform.scm.s -o /tmp/larcenous/Bones/conform.scm.o
gcc /tmp/larcenous/Bones/conform.scm.o -o /tmp/larcenous/Bones/conform.exe
Running...
Running conform:500
Elapsed time: 7.504825568 seconds (7.0) for conform:500
+!CSVLINE!+bones-unknown,conform:500,7.504825568

real	0m7.506s
user	0m7.493s
sys	0m0.010s

Testing dynamic under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/dynamic.scm > /tmp/larcenous/Bones/dynamic.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/dynamic.scm.s -o /tmp/larcenous/Bones/dynamic.scm.o
gcc /tmp/larcenous/Bones/dynamic.scm.o -o /tmp/larcenous/Bones/dynamic.exe
Running...
Running dynamic:500
Elapsed time: 20.128381444 seconds (21.0) for dynamic:500
+!CSVLINE!+bones-unknown,dynamic:500,20.128381444

real	0m20.129s
user	0m15.397s
sys	0m4.733s

Testing earley under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/earley.scm > /tmp/larcenous/Bones/earley.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/earley.scm.s -o /tmp/larcenous/Bones/earley.scm.o
gcc /tmp/larcenous/Bones/earley.scm.o -o /tmp/larcenous/Bones/earley.exe
Running...
Running earley:1

Error: out of memory

real	0m6.734s
user	0m6.727s
sys	0m0.007s
+!CSVLINE!+bones,earley,CRASHED

Testing graphs under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/graphs.scm > /tmp/larcenous/Bones/graphs.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/graphs.scm.s -o /tmp/larcenous/Bones/graphs.scm.o
gcc /tmp/larcenous/Bones/graphs.scm.o -o /tmp/larcenous/Bones/graphs.exe
Running...
Running graphs:7:3
Elapsed time: 21.56994558 seconds (22.0) for graphs:7:3
+!CSVLINE!+bones-unknown,graphs:7:3,21.56994558

real	0m21.571s
user	0m21.563s
sys	0m0.007s

Testing lattice under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/lattice.scm > /tmp/larcenous/Bones/lattice.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/lattice.scm.s -o /tmp/larcenous/Bones/lattice.scm.o
gcc /tmp/larcenous/Bones/lattice.scm.o -o /tmp/larcenous/Bones/lattice.exe
Running...
Running lattice:44:10
Elapsed time: 24.83475857 seconds (24.0) for lattice:44:10
+!CSVLINE!+bones-unknown,lattice:44:10,24.83475857

real	0m24.836s
user	0m24.827s
sys	0m0.010s

Testing matrix under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/matrix.scm > /tmp/larcenous/Bones/matrix.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/matrix.scm.s -o /tmp/larcenous/Bones/matrix.scm.o
gcc /tmp/larcenous/Bones/matrix.scm.o -o /tmp/larcenous/Bones/matrix.exe
Running...
Running matrix:5:5:2500
Elapsed time: 5.757044833 seconds (5.0) for matrix:5:5:2500
+!CSVLINE!+bones-unknown,matrix:5:5:2500,5.757044833

real	0m5.758s
user	0m5.750s
sys	0m0.007s

Testing maze under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/maze.scm > /tmp/larcenous/Bones/maze.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/maze.scm.s -o /tmp/larcenous/Bones/maze.scm.o
gcc /tmp/larcenous/Bones/maze.scm.o -o /tmp/larcenous/Bones/maze.exe
Running...
Running maze:20:7:10000
Elapsed time: 4.446360946 seconds (4.0) for maze:20:7:10000
+!CSVLINE!+bones-unknown,maze:20:7:10000,4.446360946

real	0m4.448s
user	0m4.447s
sys	0m0.000s

Testing mazefun under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/mazefun.scm > /tmp/larcenous/Bones/mazefun.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/mazefun.scm.s -o /tmp/larcenous/Bones/mazefun.scm.o
gcc /tmp/larcenous/Bones/mazefun.scm.o -o /tmp/larcenous/Bones/mazefun.exe
Running...
Running mazefun:11:11:10000
Elapsed time: 10.440210311 seconds (10.0) for mazefun:11:11:10000
+!CSVLINE!+bones-unknown,mazefun:11:11:10000,10.440210311

real	0m10.441s
user	0m10.433s
sys	0m0.007s

Testing nqueens under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/nqueens.scm > /tmp/larcenous/Bones/nqueens.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/nqueens.scm.s -o /tmp/larcenous/Bones/nqueens.scm.o
gcc /tmp/larcenous/Bones/nqueens.scm.o -o /tmp/larcenous/Bones/nqueens.exe
Running...
Running nqueens:13:10
Elapsed time: 30.024937557 seconds (30.0) for nqueens:13:10
+!CSVLINE!+bones-unknown,nqueens:13:10,30.024937557

real	0m30.026s
user	0m30.020s
sys	0m0.007s

Testing paraffins under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/paraffins.scm > /tmp/larcenous/Bones/paraffins.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/paraffins.scm.s -o /tmp/larcenous/Bones/paraffins.scm.o
gcc /tmp/larcenous/Bones/paraffins.scm.o -o /tmp/larcenous/Bones/paraffins.exe
Running...
Running paraffins:23:10

Error: out of memory

real	0m0.918s
user	0m0.917s
sys	0m0.000s
+!CSVLINE!+bones,paraffins,CRASHED

Testing parsing under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/parsing.scm > /tmp/larcenous/Bones/parsing.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/parsing.scm.s -o /tmp/larcenous/Bones/parsing.scm.o
gcc /tmp/larcenous/Bones/parsing.scm.o -o /tmp/larcenous/Bones/parsing.exe
Running...
Running parsing:2500
Elapsed time: 21.789370702 seconds (21.0) for parsing:2500
+!CSVLINE!+bones-unknown,parsing:2500,21.789370702

real	0m21.790s
user	0m21.780s
sys	0m0.010s

Testing peval under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/peval.scm > /tmp/larcenous/Bones/peval.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/peval.scm.s -o /tmp/larcenous/Bones/peval.scm.o
gcc /tmp/larcenous/Bones/peval.scm.o -o /tmp/larcenous/Bones/peval.exe
Running...
Running peval:2000
Elapsed time: 4.653795956 seconds (5.0) for peval:2000
+!CSVLINE!+bones-unknown,peval:2000,4.653795956

real	0m4.655s
user	0m4.653s
sys	0m0.000s

Testing primes under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/primes.scm > /tmp/larcenous/Bones/primes.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/primes.scm.s -o /tmp/larcenous/Bones/primes.scm.o
gcc /tmp/larcenous/Bones/primes.scm.o -o /tmp/larcenous/Bones/primes.exe
Running...
Running primes:1000:10000
Elapsed time: 3.327962727 seconds (4.0) for primes:1000:10000
+!CSVLINE!+bones-unknown,primes:1000:10000,3.327962727

real	0m3.329s
user	0m3.323s
sys	0m0.003s

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
+!CSVLINE!+bones,quicksort,COMPILEERROR

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
+!CSVLINE!+bones,scheme,COMPILEERROR

Testing slatex under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/slatex.scm > /tmp/larcenous/Bones/slatex.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/slatex.scm.s -o /tmp/larcenous/Bones/slatex.scm.o
gcc /tmp/larcenous/Bones/slatex.scm.o -o /tmp/larcenous/Bones/slatex.exe
Running...
Running slatex:500
Elapsed time: 7.519116414 seconds (8.0) for slatex:500
+!CSVLINE!+bones-unknown,slatex:500,7.519116414

real	0m7.520s
user	0m2.257s
sys	0m5.250s

Testing nboyer under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/nboyer.scm > /tmp/larcenous/Bones/nboyer.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/nboyer.scm.s -o /tmp/larcenous/Bones/nboyer.scm.o
gcc /tmp/larcenous/Bones/nboyer.scm.o -o /tmp/larcenous/Bones/nboyer.exe
Running...
Running nboyer:5:1

Error: out of memory

real	0m4.460s
user	0m4.453s
sys	0m0.003s
+!CSVLINE!+bones,nboyer,CRASHED

Testing sboyer under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/sboyer.scm > /tmp/larcenous/Bones/sboyer.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/sboyer.scm.s -o /tmp/larcenous/Bones/sboyer.scm.o
gcc /tmp/larcenous/Bones/sboyer.scm.o -o /tmp/larcenous/Bones/sboyer.exe
Running...
Running sboyer:5:1

Error: out of memory

real	0m29.793s
user	0m29.787s
sys	0m0.007s
+!CSVLINE!+bones,sboyer,CRASHED

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
+!CSVLINE!+bones,gcbench,COMPILEERROR

Testing mperm under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/mperm.scm > /tmp/larcenous/Bones/mperm.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/mperm.scm.s -o /tmp/larcenous/Bones/mperm.scm.o
gcc /tmp/larcenous/Bones/mperm.scm.o -o /tmp/larcenous/Bones/mperm.exe
Running...

Error: out of memory

real	0m2.729s
user	0m2.720s
sys	0m0.007s
+!CSVLINE!+bones,mperm,CRASHED

Testing equal under Bones
Including prelude /home/nex/src/r7rs-benchmarks/src/Bones-prelude.scm
Compiling...
bones /tmp/larcenous/Bones/equal.scm > /tmp/larcenous/Bones/equal.scm.s
nasm -I/usr/share/bones -f elf64 /tmp/larcenous/Bones/equal.scm.s -o /tmp/larcenous/Bones/equal.scm.o
gcc /tmp/larcenous/Bones/equal.scm.o -o /tmp/larcenous/Bones/equal.exe
Running...
Running equal:100:100:8:1000:2000:5000
./bench: line 506: 16590 Killed                  "$1" < "$2"

real	14m59.999s
user	15m0.073s
sys	0m0.000s
+!CSVLINE!+bones,equal,ULIMITKILLED

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
+!CSVLINE!+bones,bv2string,COMPILEERROR
