//
// myTriangleGeometry
//   応用プログラミング
//
import { 
    BufferGeometry, //BufferGeometryを継承
    Float32BufferAttribute,
    Vector3 } from 'three';

export class myTriangleGeometry extends BufferGeometry {
    constructor(
        a = new Vector3(0,0,0),
        b = new Vector3(1,0,0), //3つ頂点をベクトルとして渡す
        c = new Vector3(0,1,0)) {

        super();
        const vertices = [];
        const normals = [];
        // 3つの頂点の指定
        vertices.push(a.x, a.y, a.z);
        vertices.push(b.x, b.y, b.z);
        vertices.push(c.x, c.y, c.z);
        // 面の法線ベクトルの指定
        normals.push(
            (b-a).y * (c-a).z, (b-a).z * (c-a).y,
            (b-a).z * (c-a).x, (b-a).x * (c-a).z,
            (b-a).x * (c-a).y, (b-a).y * (c-a).x,
        )
        this.setAttribute('position',
            new Float32BufferAttribute( vertices, 3)); //プロパティを設定する
        this.setAttribute('normal',
            new Float32BufferAttribute( vertices, 3));
    }
}
